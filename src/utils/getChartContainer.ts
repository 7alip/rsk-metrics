import { AreaChart, BarChart, ComposedChart, LineChart } from 'recharts'
import { ChartDataKey } from '@/types/types'

export default (
  chartDataKeys: ChartDataKey[]
): typeof AreaChart | typeof BarChart | typeof LineChart => {
  const isAreaChart: boolean = chartDataKeys.every(
    key => key.variant === 'area'
  )
  const isLineChart: boolean = chartDataKeys.every(
    key => key.variant === 'line'
  )
  const isBarChart: boolean = chartDataKeys.every(key => key.variant === 'bar')

  return isAreaChart
    ? AreaChart
    : isLineChart
    ? LineChart
    : isBarChart
    ? BarChart
    : ComposedChart
}
