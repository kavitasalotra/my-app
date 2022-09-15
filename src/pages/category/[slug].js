import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import Layout from '../../components/Layout';
import { categoryFilePaths, CATEGORY_PATH } from '../../../utils/mdxUtils';

export default function CategoryPage({ frontMatter }) {
  console.log(frontMatter);
  return <Layout>{frontMatter.title}</Layout>;
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(CATEGORY_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = categoryFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
