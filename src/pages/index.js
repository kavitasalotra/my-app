import React from 'react';
import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path'
import matter from 'gray-matter';
import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';
// import Link from 'next/link';
// import { useState } from 'react'

const Index = ({ posts }) => {
  // console.log(posts);
  // const [list, setList] = useState([])
  // const [show, setShow] = useState(true)
  return (
    <Layout>
      {/* <button className="bg-red-600 p-4 text-white" onClick={() =>
        setList(prevState => {
          // Object.assign would also work
          return [...prevState, { id: list.length + 1, title: `Item ${list.length + 1}` }];
        })
      }>Add Item</button> */}

      {/* <button className="bg-green-600 ml-5 p-4 text-white" onClick={() =>
        setShow(!show)
      }>{show ? "Hide" : "Show"}</button>
      {show && <h1 className='text-2xl font-bold text-green-800'>Yeah its visible now</h1>}
      {list.map(item => <div key={item.id}>{item.title}</div>)} */}
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

