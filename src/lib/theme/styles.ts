import { mode } from '@chakra-ui/theme-tools'

export default {
  global: (props: Record<string, unknown>) => ({
    body: {
      fontFamily: 'body',
      color: mode('light.text', 'dark.text')(props),
      bg: mode('light.bg', 'dark.bg')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    fontFeatureSettings: `"pnum"`,
    fontVariantNumeric: 'proportional-nums',
  }),
}
