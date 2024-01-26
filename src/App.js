import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Home } from './container';



// Set the app element


const App = () => {
/*  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);
*/
  return (
    <Routes>
     
      <Route path="/" element={<Home/>} />

    </Routes>
   
  );
};

export default App;
