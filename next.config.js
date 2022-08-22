
const withPlugins = require('next-compose-plugins');
const withYAML = require('next-yaml');
const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    extension: /\.mdx?$/,
  },
})
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['mdx', 'jsx', 'js'],
};

module.exports = withPlugins([withYAML, withMDX], nextConfig);