import React from 'react'
import Container from '../../../components/Container'
import {Heading, Box, Stack, Text, PseudoBox, Flex, Image} from '@chakra-ui/core'
import blogPostIndex from "../../../data/blog"
import Layout from '../../../components/Layout'
import StackSection from '../../../components/StackSection'

const Page = () => (
    <Layout title="Blog">
        <Container>
            <Heading mt={6}>
                Blog
            </Heading>
            <Heading size="md" mt={2} mb={4} color="gray.500">
                Deneysel teknik yazılarım
            </Heading>
        </Container>

        <StackSection data={blogPostIndex.tr}/>
    </Layout>
)

export default Page
