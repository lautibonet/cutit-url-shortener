import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Mini URL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
