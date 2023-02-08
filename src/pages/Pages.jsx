import React from 'react';
import Home from './Home';
import Cuisine from './Cuisines';
import Searched from './Searched';
import Recipe from './Recipe';
import Custom from '../components/Submitform';
import {Route, Routes} from 'react-router-dom';



//takes you to home if there is no route

function Pages() {

  return (
    
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/custom" element={<Custom />} />
      </Routes>
   
  )
}



export default Pages;