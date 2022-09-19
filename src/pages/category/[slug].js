import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils';
import { useRouter } from 'next/router';
import PostItem from '../../components/PostItem';
export default function CategoryPage({ posts }) {
  const router = useRouter();
  const category = router?.query?.slug?.toLowerCase().trim();
  const filterPosts =
    posts && posts.length > 0
      ? posts.filter((item) => {
          const data = item?.data;
          if (category === data?.category?.toLowerCase().trim()) {
            return item;
          }
        })
      : [];
  console.log('filterPosts', filterPosts);
  return (
    <Layout>
      <div className="container mx-auto px-7 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="px-4 py-6 mt-5 flex flex-wrap">
          {filterPosts &&
            filterPosts.map((item) => (
              <PostItem
                key={item.filePath}
                item={item.data}
                isSmall
                filePath={item.filePath}
              />
            ))}
        </div>
      </div>
    </Layout>
  );
}

// export const getStaticProps = async ({ params }) => {
//   const categoryFilePath = path.join(CATEGORY_PATH, `${params.slug}.mdx`);
//   const source = fs.readFileSync(categoryFilePath);
//   const { content, data } = matter(source);
//   const mdxSource = await serialize(content, {
//     // Optionally pass remark/rehype plugins
//     mdxOptions: {
//       remarkPlugins: [],
//       rehypePlugins: [],
//     },
//     scope: data,
//   });

//   return {
//     props: {
//       source: mdxSource,
//       frontMatter: data,
//     },
//   };
// };

export function getServerSideProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  return { props: { posts } };
}
