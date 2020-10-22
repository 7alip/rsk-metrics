import React, { ReactText, useCallback, useState } from 'react'
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Line,
  ResponsiveContainer,
  Brush,
  TooltipFormatter,
} from 'recharts'

import {
  Box,
  IconButton,
  useColorMode,
  useDisclosure,
  useTheme,
} from '@chakra-ui/core'
import { useChartColors } from '@/hooks/useChartColors'
import { SettingsIcon } from '@chakra-ui/icons'
import ChartSettings from './ChartSettings'
import nFormatter from '@/utils/nFormatter'
import getChartContainer from '@/utils/getChartContainer'
import { ChartDataKey, ChartProps } from '@/types/types'

const Chart = ({
  data,
  dataKeys,
  xAxis,
  height,
  type = 'monotone',
  hasBrush,
  basic,
  variant,
  noLegend,
  stacked,
}: ChartProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colors } = useTheme()
  const { colorMode } = useColorMode()
  const chartColors = useChartColors()

  const initialSettings = {
    type,
    hasBrush,
    basic,
    variant,
    noLegend,
    stacked,
  }

  const [settings, setSettings] = useState(initialSettings)

  const [{ from, to }] = useState({
    from: 0,
    to: data.length - 1,
  })

  const formatter: TooltipFormatter = useCallback(
    (value, name) => [
      typeof value === 'number' && value % 1 !== 0
        ? value?.toFixed(2).toLocaleString()
        : value?.toLocaleString(),
      name,
    ],
    []
  )

  const initialKeys: ChartDataKey[] = dataKeys.map((key, index) => ({
    name: key.name,
    color: chartColors[index],
    variant: variant || key.variant || 'bar',
    isActive: true,
  }))

  const [chartDataKeys, setChartDataKeys] = useState(initialKeys)

  const handleCheckDataKeys = (values: string[]) => {
    const updatedKeys = chartDataKeys.map(key => {
      if (!values.includes(key.name)) {
        key.isActive = false
      } else {
        key.isActive = true
      }
      return key
    })
    setChartDataKeys(updatedKeys)
  }

  const handleChangeVariant = (variant: ReactText, index: number) => {
    const updatedKeys = [...chartDataKeys]
    updatedKeys[index].variant = variant
    setChartDataKeys(updatedKeys)
  }

  const toggleChangeStack = () =>
    setSettings({ ...settings, stacked: !settings.stacked })

  const random = Math.random()

  const ChartContainer = getChartContainer(chartDataKeys)

  return (
    <Box>
      <Box w='full' h={height}>
        <ResponsiveContainer>
          <ChartContainer data={data}>
            {chartDataKeys.some(key => key.variant === 'area') && (
              <defs>
                {chartDataKeys.map((key, index) => (
                  <linearGradient
                    key={index}
                    id={key.name + random}
                    x1='0'
                    y1='0'
                    x2='0'
                    y2='1'
                  >
                    <stop
                      offset='5%'
                      stopColor={chartColors[index]}
                      stopOpacity={1}
                    />
                    <stop
                      offset='100%'
                      stopColor={chartColors[index]}
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                ))}
              </defs>
            )}
            <XAxis
              hide={basic}
              dataKey={xAxis}
              stroke={colors[colorMode]?.charts.axis}
              height={40}
              tick={{ fontSize: '0.8em' }}
            />
            <YAxis
              hide={basic}
              tickFormatter={nFormatter}
              stroke={colors[colorMode]?.charts.axis}
              tick={{ fontSize: '0.8em' }}
            />
            <Tooltip
              formatter={formatter}
              contentStyle={{
                fontSize: '0.8rem',
                backgroundColor: colors[colorMode]?.box,
                borderColor: colors[colorMode]?.border,
              }}
              itemStyle={{
                padding: 0,
                margin: 0,
              }}
            />
            {!noLegend && (
              <Legend
                verticalAlign='top'
                wrapperStyle={{ fontSize: '0.8em' }}
              />
            )}
            {chartDataKeys
              .filter(key => key.isActive)
              .map((key, index) => {
                const ChartContent: any =
                  key.variant === 'area'
                    ? Area
                    : key.variant === 'line'
                    ? Line
                    : Bar

                return (
                  <ChartContent
                    key={index}
                    type={settings.type}
                    dataKey={key.name}
                    dot={false}
                    fill={
                      key.variant === 'area'
                        ? `url(#${key.name + random})`
                        : chartColors[index]
                    }
                    strokeWidth='2px'
                    stroke={chartColors[index]}
                    stackId={settings.stacked && 1}
                  />
                )
              })}
            {hasBrush && (
              <Brush
                dataKey={xAxis}
                height={20}
                stroke={colors[colorMode]?.charts.axis}
                fill='transparent'
                startIndex={from}
                endIndex={to}
              />
            )}
          </ChartContainer>
        </ResponsiveContainer>
      </Box>
      <Box>
        <IconButton
          _groupHover={{ visibility: 'visible' }}
          aria-label='settings'
          visibility='hidden'
          onClick={onOpen}
          pos='absolute'
          top={2}
          right={2}
          borderRadius='full'
          size='xs'
          icon={<SettingsIcon />}
        />
        <ChartSettings
          chartKeys={chartDataKeys}
          isOpen={isOpen}
          onClose={onClose}
          onChangeSettings={setSettings}
          onChangeVariant={handleChangeVariant}
          onCheckDataKeys={handleCheckDataKeys}
          settings={settings}
          toggleChangeStack={toggleChangeStack}
        />
      </Box>
    </Box>
  )
}

export default React.memo(Chart)
