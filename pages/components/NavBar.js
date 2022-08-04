import React, { useState, useEffect }  from 'react';
import { Box,
         Menu,
         MenuButton,
         MenuList,
         MenuItem
       } from '@chakra-ui/react'
import { HStack} from '@chakra-ui/react'
import { Center} from '@chakra-ui/react'
import { Button} from '@chakra-ui/react'
import { Text } from "@chakra-ui/react"
import { Link } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

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

export function NavigationBar() {
  const size = useWindowSize();
  const isMobile = (size.width <= 800)
  if(!isMobile) {
    return (
        <Box bg='black' w='100%' h = '48px' p={4} color='white' style={{position: 'sticky', top: '0'}}>
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
    );
  }
  if(isMobile) {
    return (
      <Box bg='black' w='100%' h = '72px' p={4} color='white' style={{position: 'sticky', top: '0'}}>
          <HStack spacing='36px'>
            <Menu>
              <MenuButton bg='#007fff' as={Button}>
                <HamburgerIcon/>
              </MenuButton>
                <MenuList color='black'>
                <MenuItem><Link href='/'>Nav Test</Link></MenuItem>
                <MenuItem><Link href='/posts/resume'>Résumé</Link></MenuItem>
                <MenuItem><Link href='/posts/second-post'>Education</Link></MenuItem>
                <MenuItem><Link href='/posts/third-post'>Experience</Link></MenuItem>
                <MenuItem><Link href='/posts/fourth-post'>Projects</Link></MenuItem>
              </MenuList>
            </Menu>
            <Text> Mason Adams</Text>
            </HStack>
      </Box>
  );
  }
    
  }