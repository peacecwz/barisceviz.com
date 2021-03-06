import React, {FunctionComponent} from 'react'
import {Image, Box, PseudoBox, Heading, Text, Flex, useColorMode, Button, FlexProps, Link} from '@chakra-ui/core'
import NextLink from 'next/link'
import styled from '@emotion/styled'

const ClampContainer = styled(Box)`
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

type ButtonData = {
    label: string,
    link: string,
    external?: boolean
}

type CardProps = {
    title: string
    desc: string
    link: string
    imageLink: string
    date: ButtonData
    isExternal: boolean
}

const Feature: FunctionComponent<CardProps & FlexProps> = ({title, desc, link, imageLink, date, isExternal, ...rest}) => {
    const LinkWrapper = (props) => isExternal ? <Link isExternal _hover={{textDecoration: "none"}} {...props} /> :
        <NextLink {...props} />

    return (
        <Flex pb={6} {...rest}>
            <Box flexGrow={1}>
                <LinkWrapper href={link}>
                    <Heading color="blue.500" cursor="pointer" fontSize={["md", "md", "lg", "xl"]}>{title}</Heading>
                </LinkWrapper>
                <ClampContainer mt={2} fontSize={["sm", "sm", "md", "md"]}>
                    <Text>{desc}</Text>
                </ClampContainer>
                <Text mt={2} fontSize={["xs", "xs", "sm", "sm"]} color="gray.500">{date}</Text>
            </Box>

            <Image src={imageLink} rounded="lg" maxH={["70px", "70px", "70px", "100px"]}
                   maxW={["70px", "70px", "70px", "100px"]} ml={2}/>
        </Flex>
    )
}

export default Feature;
