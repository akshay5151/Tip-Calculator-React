import React, { useState } from 'react'
import './App.css';
import Code from './Components/Code';


function App() {
  const [customername, setCustomerName] = useState([
  ])
  const [totaltip, setTip] = useState([
    0
  ])
  const AddCustomerName = (link) => {
    setCustomerName([...customername, link])
  }
  const AddTip = (link) => {
    setTip([...totaltip, link])
  }

  return (
    <>
    <Code customername={customername} AddCustomerName={AddCustomerName} totaltip={totaltip} AddTip={AddTip}/>
    </>
  );
}

export default App;
