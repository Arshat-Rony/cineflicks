import { Routes, Route } from 'react-router-dom';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Header from './pages/Header/Header';
import MovieDetail from './pages/Home/Home/MovieDetail/MovieDetail';
import Header from "./pages/Home/Header/Header"
import NotFouond from './pages/NotFouond/NotFouond';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home/Home'
import Movie from './pages/Home/Home/Movie';
import Login from './pages/Login/Login.';
import SignUp from './pages/Login/Signup/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/movie' element={<Movie></Movie>} />
        <Route path='movie/:id' element={<MovieDetail></MovieDetail>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route path='*' element={<NotFouond></NotFouond>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
