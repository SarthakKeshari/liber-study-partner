// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import './App.css'
import LeftPanel from './components/Dashboard/LeftPanel';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CourseDetails from './components/Courses/CourseDetails'
<<<<<<< HEAD
//import Trivia from './components/TechTrivia/Trivia'
=======
import TriviaQuizPanel from './components/TechTrivia/TriviaQuizPanel'
import Trivia from './components/TechTrivia/Trivia';
>>>>>>> 27cabb86092c3db36de7de30b1c09a7decabb6d0
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
<<<<<<< HEAD
      <LeftPanel /> 
=======
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/trivia" element={<Trivia  />} />
            {/* <TriviaQuizPanel/> */}
            {/* <CourseDetails/> */}
          </Routes>
        </BrowserRouter>
>>>>>>> 27cabb86092c3db36de7de30b1c09a7decabb6d0
      <Footer/>
    </ChakraProvider>
  )
}

export default App;
