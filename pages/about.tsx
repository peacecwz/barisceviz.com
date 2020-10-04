import React from 'react'
import Container from '../components/Container'
import {Heading, Link, Flex, Button} from '@chakra-ui/core'
import ReactMarkdown from 'react-markdown/with-html'
import Layout from '../components/Layout'

const bio = `
  👋 Hi I'm Baris! I'm a Software Engineer at Trendyol building scalable applications for milion customers. I'm student at Yildiz Technical University and Anadolu University 🤘

  <br />

  I'm working on many stacks like .NET/.NET Core (C#), Spring Boot (Java), NodeJS (Typescript), and Go. At the same time working on frontend technologies like Angular, React, and NextJS. In additional I have been worked on Mobile stacks like React Native, Xamarin, and Android

  <br />

  We built a startup (Scode) for Turkey market. Scode is teaching codes to kids with gamification and storytelling. We earned many prizes with Scode. Our team had 3 member and Our apps had 400k+ downloads on App Store and Google Play. At the same time Google chosen our app for the bast apps of 2017

  <br />
  
  I'm writing technical posts on Medium, contributing to open source projects on Github. I started streaming on my Youtube Channel. I would like to be contributor for software communities.
`

const About = () => (
    <Layout title="About">
        <Container>
            <Flex alignItems="center" my={6}>
                <Heading flexGrow={1}>
                    About Me
                </Heading>

                <Link target="_blank" href="https://linkedin.com/in/peacecwz" _hover={{textDecoration: "none"}}>
                    <Button rightIcon="external-link">
                        Resume
                    </Button>
                </Link>
            </Flex>

            <ReactMarkdown source={bio} renderers={{link: Link}} escapeHtml={false}/>
        </Container>
    </Layout>
)

export default About;
