import './App.css';
import {
  Routes,
  Route
} from 'react-router-dom'

import Home from './Components/HomePage/Home'
import Create from './Components/CreatePage/Create'
import Recipe from './Components/RecipePage/Recipe'
import Search from './Components/Search/Search'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Create' element={<Create />} />
        <Route path='/Recipe/:id' element={<Recipe />} />
        <Route path='/Search' element={<Search />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
