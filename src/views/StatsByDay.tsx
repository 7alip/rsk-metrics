import React from 'react'

import Card from '@/components/Card'
import Chart from '@/components/chart/Chart'

import statsByDay from '../data/stats_day.json'
import { ChartDataKey } from '@/types/types'
import { Flex, VStack } from '@chakra-ui/core'

const StatsByDay: React.FC = () => {
  const hashrates = statsByDay.map(({ hashrate, id }) => ({ id, hashrate }))
  const circulatingSupplies = statsByDay.map(({ circulatingSupply, id }) => ({
    id,
    circulatingSupply,
  }))
  const activeAccounts = statsByDay.map(({ activeAccounts, id }) => ({
    activeAccounts,
    id,
  }))

  const hashrateKeys: ChartDataKey[] = [{ name: 'hashrate', variant: 'area' }]
  const ciculatingSupplyKeys: ChartDataKey[] = [
    { name: 'circulatingSupply', variant: 'area' },
  ]
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
    <VStack spacing={3} w='full'>
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
      <Flex flexWrap='wrap' mx={-3}>
        <Card w={['full', 1 / 2]} text='Circulating Supply'>
          <Chart
            height={200}
            basic
            data={circulatingSupplies}
            dataKeys={ciculatingSupplyKeys}
            xAxis='id'
            type='step'
            noLegend
          />
        </Card>
        <Card w={['full', 1 / 2]} text='Active Accounts'>
          <Chart
            height={200}
            basic
            data={activeAccounts}
            dataKeys={activeAccountsKey}
            xAxis='id'
            noLegend
          />
        </Card>
      </Flex>
    </VStack>
  )
}

export default StatsByDay
