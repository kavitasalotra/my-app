import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
// import dynamic from 'next/dynamic'
// import Head from 'next/head'
// import Link from 'next/link'
import Image from 'next/image'
import path from 'path'
import Layout from '../../components/Layout'
import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.


export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <div className="container mx-auto px-8 py-6 lg:py-8 mx-auto xl:px-5 max-w-screen-lg post-header text-center">
        <div className="max-w-xl mx-auto">
          <h1>{frontMatter.category}</h1>
          <h2 className="text-3xl font-semibold my-4">{frontMatter.description}</h2>
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="relative">
                <div className="rounded-full ">
                  <Image src={frontMatter.AuthorImage} className="rounded-full" height={40} width={40} />
                </div>
                <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
              </div>
              <span className="mr-6 ml-3 text-sm text-neutral-500">
                {frontMatter.AuthorName}
              </span>
            </div>
            <div className="flex item-center  justify-center">
              <p className="leading-tight rounded-xl">
                <span className="text-sm  ml-3 text-neutral-500">
                  {frontMatter.dateTime}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <Image className="object-cover w-full rounded-lg md:h-472 md:w-265 md:rounded-none md:rounded-lg object-cover" src={frontMatter.image} alt="blogimage"
            height={576} width={1024} />
        </div>
        <main className="max-w-3xl mx-auto  my-4 text-left">
          <MDXRemote  {...source} />
        </main>
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}