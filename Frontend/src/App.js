// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import './App.css'
import LeftPanel from './components/Dashboard/LeftPanel';
import Footer from './components/Footer';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <LeftPanel />
      <Footer/>
    </ChakraProvider>
  )
}

export default App;
