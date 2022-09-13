import { Flex, Heading, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function CheckMiniURLPage() {
  const router = useRouter()
  const { id } = router.query
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (id) {
      fetch(`/api/url/${id}`)
        .then((res) => res.json())
        .then((data) => {
          data.original ? router.push(data.original) : setNotFound(true)
        })
    }
  })

  return (
    <main>
      {notFound && (
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading size="lg" mb={8}>
              404 - Your Mini URL was not found :(
            </Heading>
            <Link href="/" alignSelf="center">
              Create your own Mini URL
            </Link>
          </Flex>
        </Flex>
      )}
    </main>
  )
}
