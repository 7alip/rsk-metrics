import React from 'react'
import {
  Box,
  Center,
  Heading,
  useColorModeValue,
  Link,
  Text,
} from '@chakra-ui/core'

import Base from '@/components/Base'
import LogoAltIcon from '@/components/icons/LogoAltIcon'
import Container from '@/components/layout/Container'

const Footer: React.FC = () => {
  const bg = useColorModeValue('rsk.teal', 'dark.box')
  const color = useColorModeValue('white', 'rsk.teal')
  const colorText = useColorModeValue('white', 'dark.text')

  return (
    <Base className='xyz' w='full' bg={bg}>
      <Container>
        <Center h={150}>
          <LogoAltIcon boxSize={20} color={color} />
          <Box ml={3} textAlign='center'>
            <Heading size='xs' color={color}>
              <Link>Privacy Policy</Link>
            </Heading>
            <Text fontSize='xs' color={colorText}>
              Copyright © 2015-2020 IOV Labs. All rights reserved.
            </Text>
          </Box>
        </Center>
      </Container>
    </Base>
  )
}

export default Footer
