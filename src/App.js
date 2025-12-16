import './App.css';
import Home from './pages/home'; 
import About from './pages/About';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav style={{ padding: '20px', background: '#333', color: 'white' }}>
          <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
          <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;