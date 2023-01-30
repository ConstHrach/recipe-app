import { BrowserRouter as Router, 
  Link, Routes, Route } from 'react-router-dom'
  import './styles.css';
import Recipes from './components/Recipes'
import Home from './components/Home'
import About from './components/About'
import Reviews from './components/Reviews'

import SearchBar from './components/searchBar'


function App () {
    const recipes=['Peppered Chicken', 'Gourmet Burgers', 'Venice Pizza', 'Sushi Bake' ]

    return(
      <Router>
          <div className="navBar">
              <ul className='list'>
                  <li>
                   <Link to="/" className='home'>Home</Link>
                  </li>
                  <li>
                   <Link to="/Recipes"className='rec'>Recipes</Link>
                  </li>
                  <li>
                   <Link to="/About"className='about'>About Us</Link>
                  </li>
                  <li>
                   <Link to="/Reviews"className='rev'>Reviews</Link>
                  </li>
              </ul>
          </div>

          <div className="display">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/recipes" element={<Recipes recipes={recipes}/>} />
            </Routes>
          </div>
          <div>
        <SearchBar />
      </div>
      </Router>
  )
}
export default App;