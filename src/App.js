import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <div>
        <h1>Hello</h1>
        <NavBar />
        </div>
    </Router>
  );
}

export default App;
