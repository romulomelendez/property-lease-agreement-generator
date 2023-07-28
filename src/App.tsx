import { ChakraProvider } from '@chakra-ui/react'

import { Home } from './pages/Home'

import { GlobalStyle } from './GlobalStyle'

export const App: React.FC = () => (
  <ChakraProvider>
    <GlobalStyle />
    <Home />
  </ChakraProvider>
)