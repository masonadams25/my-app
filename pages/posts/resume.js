import React, {}  from 'react';
import { Box } from '@chakra-ui/react'
import { Stack, HStack} from '@chakra-ui/react'
import { Center} from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { NavigationBar } from '../components/NavBar'


export default function Home() {
  return (
    <Box> 
      <NavigationBar/>
      <Box bg='#343434' w='100%'>
        <Center>
          <Text
            bgGradient='linear(to-r, #007fff, #7f00ff)'
            bgClip='text'
            fontSize='6xl'
            fontWeight='extrabold'>
            Résumé
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
