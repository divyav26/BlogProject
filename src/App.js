
import './App.css'
import Home from './pages/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Blog from './pages/Blog';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/services' element = {<Services />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/blog' element={<Blog />} />
      <Route path='/about' element={<About />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
