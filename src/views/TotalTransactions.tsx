import {
  Box,
  //   Flex,
  //   Spinner,
  Text,
  useColorMode,
  useTheme,
} from '@chakra-ui/core'
import React, { PropsWithChildren } from 'react'
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import { useChartColors } from '@/hooks/useChartColors'
import Card from '@/components/Card'

import totalTransactions from '../data/total_transactions.json'

type CustomTooltipProps = {
  active: boolean
  payload: {
    name: string
    value: number
    payload: {
      fill: string
    }
  }[]
  total: number
}

const CustomTooltip = React.memo(
  ({
    active,
    payload,
    total,
  }: PropsWithChildren<CustomTooltipProps>): JSX.Element | null => {
    const theme = useTheme()
    const { colorMode } = useColorMode()

    if (active) {
      return (
        <Box
          p={1}
          fontSize='xs'
          bg={theme.colors[colorMode]?.box}
          borderColor={theme.colors[colorMode]?.border}
          borderWidth={1}
          textAlign='center'
        >
          {payload !== undefined && (
            <>
              <Text fontWeight='bold' color={payload[0].payload?.fill}>
                {payload[0].name}:{' '}
                {`${((payload[0].value / total) * 100).toFixed(1)}%`}
              </Text>
              <Text>{payload[0].value.toLocaleString()}</Text>
            </>
          )}
        </Box>
      )
    }

    return null
  }
)

const TotalTransactions: React.FC = () => {
  const COLORS = useChartColors()

  //   if (isLoading || !data)
  //     return (
  //       <Card as={Flex} justify='center' align='center' h={250}>
  //         {isLoading ? <Spinner /> : error ? 'Error' : !data && 'No data!'}
  //       </Card>
  //     )

  const { normal, remasc, bridge, call, deploy } = totalTransactions
  const total = normal + remasc + bridge + call + deploy

  const sums = [
    { name: 'remasc', transaction: remasc },
    { name: 'normal', transaction: normal },
    { name: 'bridge', transaction: bridge },
    { name: 'call', transaction: call },
  ]

  return (
    <Card
      header='Total Transactions'
      text={(remasc + normal + bridge + call + deploy).toLocaleString()}
    >
      <ResponsiveContainer width='100%' height={250}>
        <PieChart>
          <Pie
            data={sums.sort((a, b) => b.transaction - a.transaction)}
            stroke='none'
            labelLine={false}
            outerRadius={80}
            dataKey='transaction'
            paddingAngle={3}
            innerRadius={40}
          >
            {sums.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend layout='horizontal' wrapperStyle={{ fontSize: '0.8rem' }} />
          <Tooltip
            content={(active, payload) => (
              <CustomTooltip active={active} payload={payload} total={total} />
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default TotalTransactions
