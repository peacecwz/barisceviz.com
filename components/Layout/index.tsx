import React from 'react'
import {Box} from '@chakra-ui/core'
import Navigation from '../Navigation'
import Footer from '../Footer'
import {NextSeo} from 'next-seo'

const Layout = ({children, title, headerOffset = true, ...rest}) => (
    <Box {...rest}>
        <NextSeo title={title} noindex={false}/>
        <Navigation offset={headerOffset}/>
        {children}
        <Footer/>
    </Box>
)

export default Layout
