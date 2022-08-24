import React, { }  from 'react';
import { Box } from '@chakra-ui/react'
import { Stack, HStack} from '@chakra-ui/react'
import { Center} from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'
import { NavigationBar } from './components/NavBar'

export default function Home() {
  return (
    <Box>
      <NavigationBar/>
      <Box bg='#343434' w='100%'>
        <Center>
          <HStack>
          <Text
            bgGradient='linear(to-r, #007fff, #7f00ff)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'>
            Welcome!
          </Text>
          </HStack>
        </Center>
      </Box>
      <Box bg='#FAFAFA' w='100%' h='calc(100vh)' p={4} color='black'>
        <Center>
          <Stack spacing = '24px'>
            <HStack spacing='24px'>
              <Image borderRadius='full'h={['150px','250px','350px','500px']} w={['150px','250px','350px','500px']} src="https://i.lensdump.com/i/tzpNKx.jpg" alt='Mason Adams Photo' />
              <Text
                bgGradient='linear(to-l, red, #7f00ff)'
                bgClip='text'
                fontSize='3xl'
                fontWeight='extrabold'>
                Deploymemt test
              </Text>
            </HStack>
          </Stack>
        </Center>
      </Box>
    </Box>
  )
}
