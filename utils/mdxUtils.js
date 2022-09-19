import fs from 'fs';
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'content/posts');
<<<<<<< HEAD
// export const CATEGORY_PATH = path.join(process.cwd(), 'content/category');
=======
export const CATEGORY_PATH = path.join(process.cwd(), 'content/category');
>>>>>>> 96763e8678e83cf1f7c26a2eb1239b13c2aa95ae

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
<<<<<<< HEAD
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
// export const categoryFilePaths = fs
//   .readdirSync(CATEGORY_PATH)
//   // Only include md(x) files
//   .filter((path) => /\.mdx?$/.test(path));
=======

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const categoryFilePaths = fs
  .readdirSync(CATEGORY_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
>>>>>>> 96763e8678e83cf1f7c26a2eb1239b13c2aa95ae
