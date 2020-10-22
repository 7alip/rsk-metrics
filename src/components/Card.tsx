import React, { PropsWithChildren } from 'react'
import {
  Box,
  BoxProps,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from '@chakra-ui/core'

import Base from './Base'

type CardImageProps = { src: string }

type CardProps = BoxProps & {
  header?: string
  image?: string
  bordered?: boolean
  icon?: typeof Icon
  text?: string
}

export const CardImage = ({ src }: CardImageProps): JSX.Element => (
  <Box>
    <Image
      src={src}
      h={150}
      objectFit='cover'
      objectPosition='center'
      w='full'
    />
  </Box>
)

export const Card = ({
  header,
  image,
  bordered,
  icon,
  text,
  children,
  ...rest
}: PropsWithChildren<CardProps>): JSX.Element => {
  return (
    <Base
      role='group'
      w='full'
      borderLeftColor={bordered ? 'rsk.teal' : 'transparent'}
      borderLeftWidth={bordered ? '3px' : 0}
      pos='relative'
      {...rest}
    >
      {image && <CardImage src={image} />}
      <HStack spacing={[2, 3, 4]} p={[2, 3, 4]}>
        {icon && (
          <Box
            as={icon}
            boxSize={8}
            color='rsk.teal'
            alignSelf={children ? 'start' : 'initial'}
          />
        )}
        <Box w='full'>
          <Heading
            textAlign={!icon ? 'center' : 'left'}
            as='h4'
            size='md'
            isTruncated
          >
            {header}
          </Heading>
          <Text textAlign={!icon ? 'center' : 'left'}>{text}</Text>
          {children}
        </Box>
      </HStack>
    </Base>
  )
}

export default Card
