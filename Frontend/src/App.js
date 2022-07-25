// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import './App.css'
import HomePage from './components/Home/HomePage';
import Footer from './components/Footer';
// import CourseDetails from './components/Courses/CourseDetails'
import TriviaQuizPanel from './components/TechTrivia/TriviaQuizPanel'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

// 3. Pass the `theme` prop to the `ChakraProvider`
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <TriviaQuizPanel/>
      {/* <HomePage/> */}
      <Footer/>
      {/* <CourseDetails/> */}
    </ChakraProvider>
  )
}

export default App;
