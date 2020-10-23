import React, { PropsWithChildren, ReactNode, useEffect } from 'react'
import { Box, useColorMode } from '@chakra-ui/core'

const Wrapper = ({ children }: PropsWithChildren<ReactNode>): JSX.Element => {
  const { setColorMode } = useColorMode()

  useEffect(() => {
    if (window !== undefined) {
      const colormode = localStorage.getItem('chakra-ui-color-mode')
      setColorMode(colormode || 'light')
    }
  }, [])

  return <Box>{children}</Box>
}

export default Wrapper
