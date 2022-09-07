import React from 'react';
import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

const Index = ({ posts }) => {
  // console.log(posts);
  return (
    <Layout>
      <div className="container mx-auto px-7 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div className="px-4 py-6 mt-5 flex flex-wrap">
          {posts && posts.map((item, index) =>
            <PostItem key={item.filePath} item={item.data} isSmall={index > 1} filePath={item.filePath} />
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

