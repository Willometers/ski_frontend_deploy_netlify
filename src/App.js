import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>

        <h1>Hello</h1>
        <NavBar />
        
    </Router>
  );
}

export default App;
