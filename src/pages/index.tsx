import { Flex, VStack } from '@chakra-ui/core'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Container from '@/components/layout/Container'
import TransactionsByMonths from '@/views/TransactionsByMonths'
import TotalTransactions from '@/views/TotalTransactions'
import TotalGasUsedByMonth from '@/views/TotalGasUsedByMonth'
import ActiveAccounts from '@/views/ActiveAccounts'
import CirculatingSupply from '@/views/CirculatingSupply'
import Hashrate from '@/views/Hashrate'

const Home = (): JSX.Element => {
  return (
    <VStack minH='100vh' alignItems='center'>
      <Header />
      <Container fluid flex={1} mt='0 !important'>
        <Flex flexWrap='wrap' mx={-3}>
          <VStack spacing={3} w={['full', null, 1 / 4]} p={2}>
            <TotalTransactions />
            <TotalGasUsedByMonth />
            <CirculatingSupply />
            <ActiveAccounts />
          </VStack>
          <VStack spacing={3} w={['full', null, 3 / 4]} p={2}>
            <TransactionsByMonths />
            <Hashrate />
          </VStack>
        </Flex>
      </Container>
      <Footer />
    </VStack>
  )
}

export default Home
