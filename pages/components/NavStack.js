import React, {}  from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Link,
  } from '@chakra-ui/react'
  import { HamburgerIcon } from '@chakra-ui/icons'

export function NavStack() {
    return (
        <Menu>
  <MenuButton bg='#007fff' as={Button}>
    <HamburgerIcon/>
  </MenuButton>
  <MenuList>
    <MenuItem><Link href='/'>Nav Test</Link></MenuItem>
    <MenuItem><Link href='/posts/resume'>Résumé</Link></MenuItem>
    <MenuItem><Link href='/posts/second-post'>Education</Link></MenuItem>
    <MenuItem><Link href='/posts/third-post'>Experience</Link></MenuItem>
    <MenuItem><Link href='/posts/fourth-post'>Projects</Link></MenuItem>
  </MenuList>
</Menu>
    );
}