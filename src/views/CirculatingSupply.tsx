import React from 'react'

import Card from '@/components/Card'
import Chart from '@/components/chart/Chart'

import statsByDay from '../data/stats_day.json'
import { ChartDataKey } from '@/types/types'

const CirculatingSupply: React.FC = () => {
  const circulatingSupplies = statsByDay.map(({ circulatingSupply, id }) => ({
    id,
    circulatingSupply,
  }))

  const ciculatingSupplyKeys: ChartDataKey[] = [
    { name: 'circulatingSupply', variant: 'area' },
  ]

  //   if (isLoading || !data)
  //     return (
  //       <Card as={Flex} justify='center' align='center' h={250}>
  //         {isLoading ? <Spinner /> : error ? 'Error' : !data && 'No data!'}
  //       </Card>
  //     )

  return (
    <Card text='Circulating Supply'>
      <Chart
        height={100}
        basic
        data={circulatingSupplies}
        dataKeys={ciculatingSupplyKeys}
        xAxis='id'
        type='step'
        noLegend
      />
    </Card>
  )
}

export default CirculatingSupply
