/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withYAML = require('next-yaml')
module.exports = (withYAML(module.exports), nextConfig);
