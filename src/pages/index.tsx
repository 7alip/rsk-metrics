import { Flex, VStack } from '@chakra-ui/core'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import TransactionsByMonths from '@/views/TransactionsByMonths'
import TotalTransactions from '@/views/TotalTransactions'
import TotalGasUsedByMonth from '@/views/TotalGasUsedByMonth'
import StatsByDay from '@/views/StatsByDay'

const Home = (): JSX.Element => {
  return (
    <VStack minH='100vh' alignItems='center'>
      <Header />
      <Container fluid flex={1}>
        <Flex flexWrap='wrap' mx={-3}>
          <VStack spacing={3} w={['full', null, 1 / 4]} p={2}>
            <TotalGasUsedByMonth />
            <TotalTransactions />
          </VStack>
          <VStack spacing={3} w={['full', null, 3 / 4]} p={2}>
            <TransactionsByMonths />
            <StatsByDay />
          </VStack>
        </Flex>
      </Container>
      <Footer />
    </VStack>
  )
}

export default Home
