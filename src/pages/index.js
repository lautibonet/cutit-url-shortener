import Head from 'next/head'
import Image from 'next/image'
import { Flex, Heading, Input, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading size="lg" mb={8}>
          Minify your long URL
        </Heading>
        <Input
          placeholder="Looong URL"
          variant="outline"
          mb={8}
          type="text"
        ></Input>
        <Button colorScheme="blue">Make it Mini!</Button>
      </Flex>
    </Flex>
  )
}
