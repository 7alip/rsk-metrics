import React from 'react'
// import { Flex, Spinner } from '@chakra-ui/core'

import Card from '@/components/Card'
import Chart from '@/components/chart/Chart'
import { ChartDataKey } from '@/types/types'

import totalTransactionsByMonth from '../data/transactions_month_sum.json'

const TotalGasUsedByMonth: React.FC = () => {
  const gasUsed = totalTransactionsByMonth.map(({ gas_used, month }) => ({
    gasUsed: gas_used,
    month,
  }))

  const transactionsKeys: ChartDataKey[] = [
    { name: 'gasUsed', variant: 'area', color: 'red' },
  ]

  //   if (isLoading || !data)
  //     return (
  //       <Card as={Flex} justify='center' align='center' h={250}>
  //         {isLoading ? <Spinner /> : error ? 'Error' : !data && 'No data!'}
  //       </Card>
  //     )

  return (
    <Card text='Total Gas Used'>
      <Chart
        data={gasUsed}
        dataKeys={transactionsKeys}
        xAxis='month'
        basic
        noLegend
        height={100}
      />
    </Card>
  )
}

export default TotalGasUsedByMonth
