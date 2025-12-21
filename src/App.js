import './App.css';
import Home from './pages/home'; 
import About from './pages/About';
import Contact from './pages/contact';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import{useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count,setCount]= useState(0);

  const increment = () => {
    setCount(count + 1); 
    console.log("Incremented:", count);
  };

  const decrement = () => {
    setCount(count - 1); 
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
    <p className = 'sub'>Count is : {count} </p>
    <button className = 'btn1' onClick={increment}>+</button>
    <button className = 'btn2' onClick={decrement}>-</button>

    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>The USA</Accordion.Header>
        <Accordion.Body>
          The United States (USA) is a large, diverse North American nation of 50 states, known for its powerful economy, democratic republic government, and vast, varied geography from coast to coast. A "nation of immigrants," it's famous for its "melting pot" culture, global influence in entertainment, and strong traditions of liberty, individualism, and innovation, despite recent political polarization. Its geography includes high western mountains, central plains, major rivers like the Mississippi, and diverse climates, making it a global cultural and economic superpower. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sri Lanka </Accordion.Header>
        <Accordion.Body>
          Sri Lanka is a beautiful, island nation in the Indian Ocean, south of India, known as the "Pearl of the Indian Ocean" for its stunning beaches, diverse landscapes (from highlands to plains), rich history, and vibrant culture, with a predominantly Buddhist population (Sinhalese, Tamils, Moors), famous for tea, spices, gems, textiles, and ancient cities like Kandy and Galle, operating as a republic with Sinhala and Tamil as official languages. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default App;