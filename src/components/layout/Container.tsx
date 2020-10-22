import React, { PropsWithChildren } from 'react'
import { Box, BoxProps } from '@chakra-ui/core'

type ContainerProps = BoxProps & { fluid?: boolean }

const Container = ({
  fluid,
  children,
  ...rest
}: PropsWithChildren<ContainerProps>): JSX.Element => {
  return (
    <Box
      w='full'
      maxW={fluid ? 'full' : '5xl'}
      mx='auto'
      px={[2, 3, 4]}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Container
