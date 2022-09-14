import Head from 'next/head'
import Image from 'next/image'
import {
  Flex,
  Heading,
  Input,
  Button,
  Link,
  IconButton,
  useToast,
  Box,
} from '@chakra-ui/react'
import { createRef, useEffect, useRef, useState } from 'react'
import { CopyIcon } from '@chakra-ui/icons'

export default function Home() {
  const [longURL, setLongURL] = useState('')
  const [miniURL, setMiniURL] = useState(null)
  const toast = useToast()
  const inputRef = createRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const saveURLToClipboard = () => {
    navigator.clipboard.writeText(miniURL.short)
    toast({ description: 'Mini URL copied!' })
  }

  const makeItMini = () => {
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
    <>
      <Flex height="100vh" direction="column">
        <Box paddingX={4} paddingY={2}>
          <Image
            src="/logo.png"
            height={40}
            width={100}
            alt="Mini URL Logo"
            objectFit="cover"
          />
        </Box>
        <Flex height="100%" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            background="gray.100"
            p={12}
            rounded={6}
            boxShadow="sm"
          >
            <Heading size="lg" mb={8}>
              Minify your long URL
            </Heading>
            <Input
              ref={inputRef}
              value={longURL}
              onChange={(e) => setLongURL(e.target.value)}
              placeholder="Looong URL here"
              variant="outline"
              mb={8}
              type="text"
            ></Input>
            <Button colorScheme="blue" onClick={makeItMini}>
              Make it Mini!
            </Button>
            {miniURL && (
              <Flex alignSelf="center" alignItems="center" mt={8}>
                <Link href={miniURL.short}>{miniURL.short}</Link>
                <IconButton ml={2} onClick={saveURLToClipboard}>
                  <CopyIcon></CopyIcon>
                </IconButton>
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
