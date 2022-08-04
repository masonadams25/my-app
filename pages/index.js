import React, { Component, useState, useEffect }  from 'react';
import { Box } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Image } from '@chakra-ui/react'
import Link from 'next/link';
import { NavigationBar } from './components/NavBar'
import { NavStack } from './components/NavStack';

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      // eslint-disable-next-line no-inner-declarations
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


export default function Home() {
  const size = useWindowSize();
  const isMobile = (size.width <= 800)

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
