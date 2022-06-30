import React from 'react';
import { BrowserRouter , Routes, Route,  } from 'react-router-dom'
import Home from './pages/Home';






// import { Container } from './styles';

const AppRoutes: React.FC = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home/>} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;