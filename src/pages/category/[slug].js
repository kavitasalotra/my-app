import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils';
import { useRouter } from 'next/router';
import PostItem from '../../components/PostItem';

export default function CategoryPage({ posts, frontMatter }) {
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
  // console.log('filterPosts', filterPosts);
  return (
    <Layout>
      <div className="container mx-auto px-7 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <h1 className="sm:text-3xl font-semibold text-center"></h1>
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
