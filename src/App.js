import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Movie from './components/Movie';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' Component={MoviesList} />
        <Route path='/movie/:id' Component={Movie} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
