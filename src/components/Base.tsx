import React, { PropsWithChildren } from 'react'
import { Box, useColorModeValue, BoxProps, FlexProps } from '@chakra-ui/core'

const Base = ({
  children,
  rounded,
  hasBorder = true,
  ...rest
}: PropsWithChildren<
  (BoxProps | FlexProps) & { hasBorder?: boolean }
>): JSX.Element => {
  const bg = useColorModeValue('light.box', 'dark.box')
  const shadow = useColorModeValue('light.box', 'dark.box')
  const borderColor = useColorModeValue('light.border', 'dark.border')

  return (
    <Box
      bg={bg}
      borderColor={borderColor}
      borderWidth={hasBorder ? 1 : 0}
      shadow={shadow}
      borderRadius={rounded ? 'md' : 0}
      transition='all 0.3s ease-in-out'
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Base
