import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ChakraProvider } from '@chakra-ui/core'
import theme from '../theme'
import Wrapper from '@/components/layout/Wrapper'
import { Head } from '@/components/Head'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head title='RSK Metrics' />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ChakraProvider>
  )
}

export default MyApp
