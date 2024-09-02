
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import Viewcart from './pages/Viewcart';
import Checkout from './components/Checkout';
import React from 'react';
import OrderConfirm from './components/OrderConfirm';

function App() {
  const [orderInfo, setOrderInfo] =React.useState("")
  const [searchTerm, setSearchTerm] =React.useState("")
  return (
    <div className="App">
        <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop searchTerm={searchTerm}/>}></Route>
          <Route path='/viewcart' element={<Viewcart/>}></Route>
          <Route path='/checkout' element={<Checkout setOrderInfo={setOrderInfo}/>}></Route>
          <Route path='/orderconfirm' element={<OrderConfirm orderInfo={orderInfo}/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
