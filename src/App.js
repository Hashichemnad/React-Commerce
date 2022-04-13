import React from "react"
import { useEffect, useState } from "react";
import axios from 'axios'
import './App.css';
import ProductCatalog from './components/ProductCatalog'

function App() {

  const [products,setProducts] = useState()
  
  useEffect(()=>{
    console.log('chk ')
      (async function(){
        console.log('chk 1')
          const response = await axios.get('./../product')
          if(response.status === 200){
              setProducts(response.data.products)
          }
          console.log('chk '+response.status)
      })()
  },[]);

  return (
    <div className="App">
      <div id='product-catalog'><ProductCatalog products={products}/></div>
    </div>
  );
}

export default App;
