import React, { ReactElement } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  HStack,
  useColorModeValue,
  VStack,
  Text,
  Select,
  Switch,
} from '@chakra-ui/core'
import ChartSettingsVariantButtons from './ChartSettingsVariantButtons'
import { ChartSettingsProps, ChartType } from '@/types/types'

function ChartSettings({
  chartKeys,
  isOpen,
  onClose,
  onChangeSettings,
  onChangeVariant,
  settings,
  toggleChangeStack,
}: ChartSettingsProps): ReactElement {
  const bg = useColorModeValue('light.box', 'dark.box')
  const chartTypes: ChartType[] = [
    'basis',
    'basisClosed',
    'basisOpen',
    'linear',
    'linearClosed',
    'natural',
    'monotoneX',
    'monotoneY',
    'monotone',
    'step',
    'stepBefore',
    'stepAfter',
  ]

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='right'>
      <DrawerOverlay>
        <DrawerContent bg={bg}>
          <DrawerHeader textAlign='center' color='rsk.teal'>
            Chart Settings
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={3}>
              {chartKeys.map((key, index) => (
                <HStack key={index}>
                  <Text color={key.color} w={16} isTruncated>
                    {key.name}
                  </Text>
                  <ChartSettingsVariantButtons
                    onChangeVariant={variant => onChangeVariant(variant, index)}
                    activeKey={key}
                  />
                </HStack>
              ))}
            </VStack>
            <HStack mt={4} alignItems='flex-start'>
              <VStack spacing={3}>
                <Text>Chart Type</Text>
                <Select
                  size='sm'
                  value={settings.type}
                  onChange={e =>
                    onChangeSettings({ ...settings, type: e.target.value })
                  }
                >
                  {chartTypes.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </Select>
              </VStack>
              <VStack spacing={3}>
                <Text>Stack Chart</Text>
                <Switch
                  isChecked={settings.stacked}
                  onChange={toggleChangeStack}
                />
              </VStack>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default ChartSettings
