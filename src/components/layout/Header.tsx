import React from 'react'
import { Flex, HStack, IconButton, Text, useColorMode } from '@chakra-ui/core'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import Base from '@/components/Base'
import LogoIcon from '@/components/icons/LogoIcon'
import Container from '@/components/layout/Container'

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Base as={Flex} align='center' justify='center' w='full' h={16} mb={1}>
      <Container fluid>
        <Flex justify='space-between'>
          <HStack color='rsk.teal'>
            <LogoIcon boxSize={8} />
            <Text userSelect='none'>RSK Metrics</Text>
          </HStack>
          <IconButton
            aria-label='toggle color mode'
            borderRadius='full'
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          />
        </Flex>
      </Container>
    </Base>
  )
}

export default Header
