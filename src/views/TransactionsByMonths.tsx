import React from 'react'

import Card from '@/components/Card'
import Chart from '@/components/chart/Chart'

import transactionsMonthSum from '../data/transactions_month_sum.json'
import { ChartDataKey } from '@/types/types'

const TransactionsByMonths: React.FC = () => {
  const transactions = transactionsMonthSum.map(
    ({ deploy, normal, remasc, call, month }) => ({
      deploy,
      normal,
      remasc,
      call,
      month,
    })
  )

  const transactionsKeys: ChartDataKey[] = [
    { name: 'remasc', variant: 'area' },
    { name: 'bridge', variant: 'area' },
    { name: 'normal', variant: 'area' },
    { name: 'call', variant: 'area' },
    { name: 'deploy', variant: 'area' },
  ]

  //   if (isLoading || !data)
  //     return (
  //       <Card as={Flex} justify='center' align='center' h={250}>
  //         {isLoading ? <Spinner /> : error ? 'Error' : !data && 'No data!'}
  //       </Card>
  //     )

  return (
    <Card header='Monthly All Transactions'>
      <Chart
        height={300}
        hasBrush
        data={transactions}
        dataKeys={transactionsKeys}
        xAxis='month'
      />
    </Card>
  )
}

export default TransactionsByMonths
