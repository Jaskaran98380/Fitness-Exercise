import React from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:"1550px"}}} m='0px'>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/exercise/:id' element={<ExerciseDetails />} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App