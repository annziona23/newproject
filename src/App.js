
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Addemp from './Components/Addemp';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div >
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add' element={<Addemp />}> </Route>
    </Routes>
  </BrowserRouter>
  

    </div>
  );
}

export default App;
