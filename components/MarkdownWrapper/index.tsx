import React from 'react'
import Container from '../../components/Container'
import {MDXProvider} from '@mdx-js/react'
import MarkdownComponents from '../Utilities/MarkdownComponents'
import Layout from '../Layout'

const MarkdownWrapper = ({title, children}) => {
  return (
    <Layout title={title}>
      <Container>
        <MDXProvider components={MarkdownComponents}>
          {children}
        </MDXProvider>
      </Container>
    </Layout>
  )
}

export default MarkdownWrapper
