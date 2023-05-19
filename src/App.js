import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './components/Register'

function App() {
  return (
    <div className="relative App">
     <div className='z-50 flex items-center '>
     </div>
     <Register/>
       <Navbar />
     <Home />
    </div>
  );
}

export default App;
