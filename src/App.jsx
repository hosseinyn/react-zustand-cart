import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useEffect } from "react";


import { useStorePrice , useStoreProductsCount , useStoreProducts } from "./store";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {

  const { price , setPrice } = useStorePrice();
  const { count , setCount } = useStoreProductsCount();
  const { products , setProducts } = useStoreProducts();

  useEffect(() => {
    setPrice(Number(localStorage.getItem("prices")))
    setCount(Number(localStorage.getItem("products_count")))
    setProducts(JSON.parse(localStorage.getItem("products")) || '[]')
  } , [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
