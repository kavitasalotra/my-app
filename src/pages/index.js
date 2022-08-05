import React from 'react';
import HomeHero from '../components/HomeHero';
import Layout from '../components/Layout';
import About from '../components/About';

const Index = () => {
  return (
    <Layout>
      <HomeHero />
      <About />
    </Layout>
  );
};

export default Index;
