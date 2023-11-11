import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const[loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, [2800])
  }, [])


  return (
    <div className="App">
      {loading 
      ? 
        <div className="centerLoading">
          <ClimbingBoxLoader 
            size={30}
            color={"#F37A24"}
            loading={loading}
          />
        </div>

      : 
      (
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>

          <Footer />
        </BrowserRouter>
      )
    }
    </div>
  );
}

export default App;
