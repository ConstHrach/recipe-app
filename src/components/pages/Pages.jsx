import React from 'react';
import Home from './Home';
import Cuisines from './Cuisines';
import Searched from './Searched';
import Recipe from './Recipe';
import userRecipes from './UserRecipes';

import {Route, Routes} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cuisines/:type" element={<Cuisines />} />
              <Route path="/searched/:search" element={<Searched />} />
              <Route path="/recipe/:name"element={<Recipe/>}/>
              <Route path ="/userRecipes" element={<userRecipes />}/>
    </Routes>
  );
}

export default Pages