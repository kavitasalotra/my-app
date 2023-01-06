import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import client from '../../../utils/sanityClient';
import Layout from '../../components/Layout';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Post({ post }) {
  return (
    <Layout>
      <article className="container mx-auto">
        <div className="text-center p-6 space-y-6">
          <img
            src={urlFor(post.image).width(900).url()}
            alt={post.title}
            className="inline-flex"
          />
          <h1 className=" text-lg font-semibold">{post.title}</h1>
          <div className="mx-8 p-8 text-left">
            <PortableText value={post.content} />
          </div>
        </div>
      </article>
    </Layout>
  );
}

const query = groq`*[_type == "blog" && slug.current == $slug][0]`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "blog" && defined(slug.current)][].slug.current`,
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const post = await client.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}
export default Post;
