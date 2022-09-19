import React from 'react';
import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
import PostItem from '../components/PostItem';

export const archive = ({ posts }) => {
  return (
    <>
      <Layout>
        <div className="container mx-auto px-7 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
          <div className="text-center mb-6">
            <h1 className="text-4xl text-neutral-800 font-semibold mb-4">
              Archive
            </h1>
            <p className="text-lg text-neutral-800 font-normal mb-9">
              See all posts we have ever written.
            </p>
          </div>
          <div className="px-5 py-6 mt-5 flex flex-wrap">
            {posts &&
              posts.map((item) => (
                <PostItem
                  key={item.filePath}
                  item={item.data}
                  isSmall={true}
                  filePath={item.filePath}
                />
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default archive;

export function getStaticProps() {
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
