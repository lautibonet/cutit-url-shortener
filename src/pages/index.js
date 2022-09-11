import Head from 'next/head'
import Image from 'next/image'
import { Flex, Heading, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  const [longURL, setLongURL] = useState('')
  const [miniURL, setMiniURL] = useState(null)

  const handleClick = () => {
    if (!longURL) return
    fetch('/api/url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ original: longURL }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMiniURL(data)
      })
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading size="lg" mb={8}>
          Minify your long URL
        </Heading>
        <Input
          value={longURL}
          onChange={(e) => setLongURL(e.target.value)}
          placeholder="Looong URL"
          variant="outline"
          mb={8}
          type="text"
        ></Input>
        {miniURL && (
          <Input
            disabled
            value={miniURL.short}
            variant="outline"
            mb={8}
            type="text"
          ></Input>
        )}
        <Button colorScheme="blue" onClick={handleClick}>
          Make it Mini!
        </Button>
      </Flex>
    </Flex>
  )
}
