import React from 'react'
import Hero from "../../components/Hero"

import blogIndex from '../../data/blog'

import StackSection from '../../components/StackSection'
import Layout from '../../components/Layout'

const Home = ({photoURLs}) => (
    <Layout title="Ana Sayfa" headerOffset={false}>
        <Hero className="pt-12"/>

        <StackSection title="Blog" data={blogIndex.tr.slice(0, 3)} seeMoreLink="/tr/posts"/>

    </Layout>
)

export default Home
