import Homepage from './pages/Homepage';
import CategoryMovies from './pages/CategoryMovies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routhPath } from './constants/Route';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = {routhPath.home} element = {<Homepage />} />
          <Route path= {routhPath.categories} element ={<CategoryMovies />} />
          <Route path= {routhPath.invalid} element = {<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
