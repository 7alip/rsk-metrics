import React, { ReactElement } from 'react'
import { HStack, Box, useRadio, useRadioGroup } from '@chakra-ui/core'
import {
  AiOutlineBarChart,
  AiOutlineLineChart,
  AiOutlineAreaChart,
} from 'react-icons/ai'
import { ChartSettingsVariantButtonsProps, RadioCardProps } from '@/types/types'

function RadioCard(props: RadioCardProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props)
  const { variant, activeKey } = props
  const Icon =
    variant === 'bar'
      ? AiOutlineBarChart
      : variant === 'line'
      ? AiOutlineLineChart
      : AiOutlineAreaChart

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        as={Icon}
        cursor='pointer'
        boxSize={6}
        opacity={0.3}
        _checked={{
          bg: activeKey.color,
          color: 'white',
          opacity: 1,
        }}
        _hover={{
          opacity: 0.5,
        }}
      >
        {props.children}
      </Box>
    </Box>
  )
}

function ChartSettingsVariantButtons({
  activeKey,
  onChangeVariant,
}: ChartSettingsVariantButtonsProps): ReactElement {
  const variants: string[] = ['bar', 'line', 'area']

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'variants',
    defaultValue: activeKey.variant,
    onChange: onChangeVariant,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {variants.map(value => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard
            key={value}
            activeKey={activeKey}
            variant={value}
            {...radio}
          >
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}

export default ChartSettingsVariantButtons
