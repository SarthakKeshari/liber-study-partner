// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import './App.css'
import LeftPanel from './components/Dashboard/LeftPanel';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <LeftPanel />
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
