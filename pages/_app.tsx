import React, { useEffect } from 'react'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { theme, colorConfig } from '../components/Theme'
import { RootSeo } from '../components/Seo'

export default ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider value="light">
        <CSSReset config={colorConfig}/>
        <RootSeo />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
