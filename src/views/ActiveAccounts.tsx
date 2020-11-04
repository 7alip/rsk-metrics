import React from 'react'

import Card from '@/components/Card'
import Chart from '@/components/chart/Chart'

import statsByDay from '../data/stats_day.json'
import { ChartDataKey } from '@/types/types'

const ActiveAccounts: React.FC = () => {
  const activeAccounts = statsByDay.map(({ activeAccounts, id }) => ({
    activeAccounts,
    id,
  }))

  const activeAccountsKey: ChartDataKey[] = [
    { name: 'activeAccounts', variant: 'area' },
  ]

  //   if (isLoading || !data)
  //     return (
  //       <Card as={Flex} justify='center' align='center' h={250}>
  //         {isLoading ? <Spinner /> : error ? 'Error' : !data && 'No data!'}
  //       </Card>
  //     )

  return (
    <Card text='Active Accounts'>
      <Chart
        height={100}
        basic
        data={activeAccounts}
        dataKeys={activeAccountsKey}
        xAxis='id'
        noLegend
      />
    </Card>
  )
}

export default ActiveAccounts
