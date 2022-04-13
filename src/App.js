import React, { useEffect, useState } from "react"
import axios from 'axios'
import './App.css';
import ProductCatalog from './components/ProductCatalog'

function App() {

  const [products,setProducts] = useState()
  
  const fetch=async()=>{
    const response = await axios.get('http://localhost/TripPakage/data.php')
    if(response.status === 200){
        setProducts(response.data.products)
    }
    console.log('chk '+JSON.stringify(response.data.products))
  }

  useEffect( ()=>{
    fetch()
          
  },[products]);

  return (
    <div className="App">
      {products?
      <div id='product-catalog'><ProductCatalog products={products}/></div> : ''}
    </div>
  );
}

export default App;
