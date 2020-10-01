import React from 'react'
import Container from '../../components/Container'
import {Heading, Box, Stack, Text, PseudoBox, Flex, Image} from '@chakra-ui/core'
import blogPostIndex from "../../data/blog"
import Layout from '../../components/Layout'
import StackSection from '../../components/StackSection'

const Page = () => (
    <Layout title="Posts">
        <Container>
            <Heading mt={6}>
                Posts
            </Heading>
            <Heading size="md" mt={2} mb={4} color="gray.500">
                My experimental technical posts
            </Heading>
        </Container>

        <StackSection data={blogPostIndex.en}/>
    </Layout>
)

export default Page
