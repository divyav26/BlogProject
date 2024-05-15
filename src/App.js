

import Home from './pages/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import Details from './pages/Details';
import AddEditBlog from './pages/AddEditBlog';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Details />} />
      <Route path='/create' element = {<AddEditBlog />}/>
      <Route path='/update/:id' element={<AddEditBlog />}/>
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
