import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './assests/styles/style.css'
import Main from './components/Main';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route exact path="/" element={<Main/>}/>
        </Routes>
        </div>
    </Router>
  );
}
