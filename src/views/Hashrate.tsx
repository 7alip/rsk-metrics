import React from 'react'

import Card from '@/components/Card'
import Chart from '@/components/chart/Chart'

import statsByDay from '../data/stats_day.json'
import { ChartDataKey } from '@/types/types'

const Hashrate: React.FC = () => {
  const hashrates = statsByDay.map(({ hashrate, id }) => ({ id, hashrate }))

  const hashrateKeys: ChartDataKey[] = [{ name: 'hashrate', variant: 'area' }]

  //   if (isLoading || !data)
  //     return (
  //       <Card as={Flex} justify='center' align='center' h={250}>
  //         {isLoading ? <Spinner /> : error ? 'Error' : !data && 'No data!'}
  //       </Card>
  //     )

  return (
    <Card header='Hashrate'>
      <Chart
        height={300}
        hasBrush
        data={hashrates}
        dataKeys={hashrateKeys}
        xAxis='id'
        noLegend
        noYAxis
      />
    </Card>
  )
}

export default Hashrate
