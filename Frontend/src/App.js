// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import './App.css'
import RightPanel from './components/Dashboard/RightPanel';
import Footer from './components/Footer';
import HomePage from './components/Home/HomePage';

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
      <RightPanel />
      <Footer/>
    </ChakraProvider>
  )
}

export default App;
