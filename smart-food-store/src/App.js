import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Login  from './login';
import { Navbar } from './navbar';
import Register from './Register'
import { Kart } from './Kart';
import FreshProduce from "./components/FreshProduce";
import Vegetables from "./components/Vegetables";
import Fruits from "./components/Fruits";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='Kart' element={<Kart />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/:categoryName" element={<FreshProduce />}></Route>
          <Route path="/:categoryName/v/:id" element={<Vegetables />}></Route>
          <Route path="/:categoryName/f/:id" element={<Fruits />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
