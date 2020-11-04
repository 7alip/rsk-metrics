import { UseRadioGroupProps, UseRadioProps } from '@chakra-ui/core'
import { Dispatch, ReactNode, ReactText, SetStateAction } from 'react'

export type ChartType =
  | 'basis'
  | 'basisClosed'
  | 'basisOpen'
  | 'linear'
  | 'linearClosed'
  | 'natural'
  | 'monotoneX'
  | 'monotoneY'
  | 'monotone'
  | 'step'
  | 'stepBefore'
  | 'stepAfter'

export type ChartDataKey = {
  name: string
  color?: string
  variant: ReactText
  isActive?: boolean
}

export interface ChartSettings {
  type?: ChartType
  hasBrush?: boolean
  basic?: boolean
  variant?: ReactText
  noLegend?: boolean
  stacked?: boolean
  noXAxis?: boolean
  noYAxis?: boolean
}

export interface ChartProps extends ChartSettings {
  data: any
  dataKeys: ChartDataKey[]
  xAxis: string
  height?: number
}

export type ChartSettingsProps = {
  chartKeys: ChartDataKey[]
  isOpen: boolean
  onChangeSettings: Dispatch<SetStateAction<any>>
  onChangeVariant: (value: ReactText, index: number) => void
  onClose: () => void
  settings: ChartSettings
  toggleChangeStack: () => void
}

export type ChartSettingsVariantButtonsProps = {
  onChangeVariant: UseRadioGroupProps['onChange']
  activeKey: ChartDataKey
}

export interface RadioCardProps extends UseRadioProps {
  variant: string
  activeKey: ChartDataKey
  children: ReactNode
}
