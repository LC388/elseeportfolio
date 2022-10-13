import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (
<>
  {/*<Landing/>*/}
  <Navbar/>
  <Routes>
  
  <Route path="/" element={<Home  />}/>
  <Route path="/contact" element={<Contact  />}/>
 
  
</Routes>

</>
  );
}

export default App;
