import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import client from '../../utils/sanity';

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

function Post({ post }) {
  return (
    <article>
      <img src={urlFor(post.image).width(600).url()} alt={post.title} />
      <h1>{post.title}</h1>
      <span>By {post.description}</span>
    </article>
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
