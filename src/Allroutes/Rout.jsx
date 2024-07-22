
import { Route,Routes } from 'react-router-dom'
import Product from '../Componenta/Product'
import Home from '../Componenta/Home'
import Addproduct from '../Componenta/Addproduct'

function Rout() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/addproduct" element={<Addproduct/>}></Route>
    </Routes>
  )
}

export default Rout
