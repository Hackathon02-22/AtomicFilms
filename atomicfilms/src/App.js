import './App.css';
import FooterPage from './components/Footer';
import { MovieList } from './components/MovieList';

function App() {
  return (
    <div className="App">
      
      <MovieList/>
      <FooterPage />
        
    </div>
  );
}

export default App;
