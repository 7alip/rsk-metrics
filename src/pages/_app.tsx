import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ChakraProvider } from '@chakra-ui/core'
import theme from '../theme'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
