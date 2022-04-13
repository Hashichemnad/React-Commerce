import React from "react"
import axios from 'axios'
import './App.css';
import ProductCatalog from './components/ProductCatalog'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
        products:[]
    }
  }

  fetch = async()=>{
    const res=await axios.get('http://localhost/TripPakage/data.php');
    if(res.status===200){
      this.setState({products:res.data.products})
      console.log('status'+ JSON.stringify(this.state.products))
    }
  }

  componentDidMount() {
    this.fetch()
  }
  
  render(){
    return (
      <div className="App">
        <div id='product-catalog'><ProductCatalog products={this.state.products}/></div>
      </div>
    )}
}

export default App;
