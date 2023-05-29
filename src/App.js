import './App.css';
import AdContainer from './components/AdContainer';
import Header from './components/Header';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <Header />
      <AdContainer />
      <MoviesList />
    </div>
  );
}

export default App;
