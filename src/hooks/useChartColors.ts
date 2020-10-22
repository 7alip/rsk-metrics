import { useTheme } from '@chakra-ui/core'

export const useChartColors = (): string[] => {
  const theme = useTheme()

  return [
    theme.colors.rsk.teal,
    theme.colors.orange[300],
    theme.colors.red[400],
    theme.colors.purple[300],
    theme.colors.blue[400],
  ]
}
