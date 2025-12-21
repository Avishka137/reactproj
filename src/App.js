import './App.css';
import Home from './pages/home'; 
import About from './pages/About';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  let count = 0;

  const increment = () => {
    count += 1; 
    console.log("Incremented:", count);
  };

  const decrement = () => {
    count -= 1; 
    console.log("Decremented:", count);
  };  
  return (  
    <div>
    <Router>
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
  
    </Router>
  
    <span>
      My Counter
    </span>
    <p>Count is {count} </p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;