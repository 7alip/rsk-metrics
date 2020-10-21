import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ChakraProvider } from '@chakra-ui/core'

import theme from '@/lib/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
