import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Items } from './Item  galleries';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './login';
import { Navbar } from './navbar';
import { Kart } from './Kart';
import { FreshFoodsList } from './FreshFoodsList';
import { BakedList } from './BakedList';
import { PantriesList } from './PantriesList';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='freshfoodslist' element={<FreshFoodsList />} />
            <Route path='bakedlist' element={<BakedList />} />
            <Route path='pantrieslist' element={<PantriesList />} />
            <Route path='Kart' element={<Kart />} />
          </Route>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
