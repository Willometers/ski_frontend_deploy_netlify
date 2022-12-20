import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';
import WeatherShow from './components/ShowWeather';

function App() {
  return (
    <Router>
      <div>

        <h1>Hello</h1>
        <NavBar />
        <WeatherShow />

      </div>
    </Router>
  );
}

export default App;
