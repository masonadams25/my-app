import React, { Component }  from 'react';
import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { NavigationBar } from '../components/NavBar'
import Link from 'next/link';


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
            Experience
          </Text>
        </Center>
      </Box>
      <Box bg='#FAFAFA' w='100%' h='calc(100vh)' p={4} color='black'>
        
      </Box>
    </Box>
  )
}
