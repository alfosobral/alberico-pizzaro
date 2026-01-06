import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import ProductInfo from './Pages/ProductInfo/ProductInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
