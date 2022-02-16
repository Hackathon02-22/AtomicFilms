import "./App.css";
import FooterPage from "./components/Footer";
import { MovieList } from "./components/MovieList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <FooterPage />
    </div>
  );
}

export default App;
