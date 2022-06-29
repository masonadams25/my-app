import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'


import Link from 'next/link';

//main
export default function Home() {
  return (
    <Box>
      <Box bg='black' w='100%' h = '48px' p={4} color='white'>
        <Center>
          <HStack spacing='36px'>
            <Box w='72px' h='48px' color='#007fff'>
              <Link href='/'>Home</Link>
            </Box>
            <Box w='90px' h='48px'>
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
      <Box bg='#FAFAFA' w='100%' h='calc(100vh)' p={4} color='black'>
        <Center>
          <Stack spacing = '24px'>
            <HStack spacing='24px'>
              <Image borderRadius='full'h='500px' w='500x' src="https://i.lensdump.com/i/tzpNKx.jpg" alt='Mason Adams Photo' />
              <Text
                bgGradient='linear(to-l, red, #7f00ff)'
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'>
                Blah blah blah, 
                but pretty
              </Text>
            </HStack>
          </Stack>
        </Center>
      </Box>
    </Box>
  )
}
