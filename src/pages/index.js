import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../utils/sanityClient';
import Layout from '../components/Layout';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

function LogIn({ posts = [] }) {
  console.log('posts', posts);
  return (
    <Layout>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {posts.map((item) => (
            <div key={item._id}>
              <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href={`/post/${item?.slug?.current || ''}`}>
                  <img
                    className="rounded-t-lg"
                    src={urlFor(item.image).width(650).height(380).url()}
                    alt={item.title}
                  />
                </a>
                <div className="p-5">
                  <div>
                    <div className="max-w-sm rounded overflow-hidden">
                      <div className="px-6 py-4">
                        <div className="font-bold text-sm mb-2">
                          {item.title}
                        </div>
                        <p className="text-gray-700 text-lg font-semibold">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const posts = await sanityClient.fetch(groq`
    *[_type == "blog"] | order(publishedAt desc)
  `);
  return {
    props: {
      posts,
    },
  };
}
export default LogIn;

// import React from 'react';
// // import PostItem from '../components/PostItem';
// import Card from '../components/Card';
// import Layout from '../components/Layout';
// // import fs from 'fs';
// // import path from 'path';
// // import matter from 'gray-matter';
// // import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';

// const Index = () => {
//   // console.log(category);
//   return (
//     <Layout>
//       <div className="container mx-auto px-7 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
//         <div className="px-4 py-6 mt-5 flex flex-wrap">

//           {/* {posts &&
//             posts.map((item, index) => (
//               <PostItem
//                 key={item.filePath}
//                 item={item.data}
//                 isSmall={index > 1}
//                 filePath={item.filePath}
//               />
//             ))} */}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Index;
// export function getStaticProps() {
//   const posts = postFilePaths.map((filePath) => {
//     const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
//     const { content, data } = matter(source);

//     return {
//       content,
//       data,
//       filePath,
//     };
//   });

//   return { props: { posts } };
// }
