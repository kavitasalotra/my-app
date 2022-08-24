import React from 'react';
import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';


const Index = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <div className="container  mx-auto px-8 py-6 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="px-4 py-6 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:grid-cols-2 gap-10">
          {posts && posts.map((item) => <PostItem key={item.filePath} item={item.data} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}

