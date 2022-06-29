import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Code } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


export default function Home() {
  return (
    <Box> 
      <Box bg='black' w='100%' h = '48px' p={4} color='white'>
        <Center>
          <HStack spacing='36px'>
            <Box w='72px' h='48px'>
              <Link href='/'>Home</Link>
            </Box>
            <Box w='90px' h='48px' color='#007fff'>
              <Link href='/posts/resume'>Résumé</Link>
            </Box>
            <Box w='90px' h='48px'>
            <Link href='/posts/second-post'>Education</Link>
            </Box>
            <Box w='90px' h='48px'>
            <Link href='/posts/third-post'>Experience</Link>
            </Box>
            <Box w='90px' h='48px'>
            <Link href='/posts/fourth-post'>Projects</Link>
            </Box>
          </HStack>
        </Center>
      </Box>
      <Box bg='#343434' w='100%'>
        <Center>
          <Text
            bgGradient='linear(to-r, #007fff, #7f00ff)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'>
            Welcome!
          </Text>
        </Center>
      </Box>
      <Box bg='#FAFAFA' w='100%' h='calc(200vh)' p={4} color='black'>
      <Center>
        <Stack spacing='24px'>
          <Center>
            <HStack spacing='24px'>
              <Link href='https://www.linkedin.com/in/masonadams25/' isExternal>
              LinkedIn <ExternalLinkIcon mx='2px' />
              </Link>
              <Link href='https://github.com/masonadams25' isExternal>
              Github <ExternalLinkIcon mx='2px' />
              </Link>
            </HStack>
          </Center>
          <Image h='1000px' w='770px' src="https://i3.lensdump.com/i/tzpvhM.jpg" alt='Mason Adams Resume' />
        </Stack>
        </Center>
      </Box>
    </Box>
  )
}
