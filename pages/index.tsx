import React from 'react';
import Hero from '../components/Hero';

import blogIndex from '../data/blog';

import StackSection from '../components/StackSection';
import Layout from '../components/Layout';

const Home = () => (
    <Layout title="Home" headerOffset={false}>
        <Hero className="pt-12"/>

        <StackSection title="Blog" data={blogIndex.en.slice(0, 3)} seeMoreLink="/posts"/>

    </Layout>
);

export default Home;
