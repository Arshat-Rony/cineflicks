import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './pages/Header/Header';
import MovieDetail from './pages/Home/Home/MovieDetail/MovieDetail';
import Home from './pages/Home/Home/Home';
import NotFouond from './pages/NotFouond/NotFouond';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' exact element={<Home></Home>} />
        <Route path='movie/:id' element={<MovieDetail></MovieDetail>} />
        <Route path='*' element={<NotFouond></NotFouond>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
