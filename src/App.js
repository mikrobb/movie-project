import { useEffect , useState } from "react";
import HomePage from './commponents/HomePage'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import FavoriteFilms from "./commponents/FavoriteFilms";

function App() {
  return(
    <>
      <Router>
        <Route exact path ='/'>
          <HomePage/>
        </Route>
        <Route path='/favoriteFilms'>
          <FavoriteFilms/>
        </Route>
      </Router>
      
    </>
  )
}

export default App;
