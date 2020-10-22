import React, { PropsWithChildren } from 'react'
import { Box, useColorModeValue, BoxProps, FlexProps } from '@chakra-ui/core'

const Base = (props: PropsWithChildren<BoxProps | FlexProps>): JSX.Element => {
  const bg = useColorModeValue('light.box', 'dark.box')
  const shadow = useColorModeValue('light.box', 'dark.box')
  const borderColor = useColorModeValue('light.border', 'dark.border')

  return (
    <Box
      bg={bg}
      borderColor={borderColor}
      borderWidth={1}
      shadow={shadow}
      borderRadius={props.rounded ? 'md' : 0}
      {...props}
    >
      {props.children}
    </Box>
  )
}

export default Base
