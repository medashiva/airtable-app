
// import './App.css';
import React, { useEffect, useState } from "react";
import Dashboard from './pages/dashboard'

import LoaderIcon from "react-loader-icon"

import { getOrdersData } from './api/api'

function App() {
  const [ordersData, setOrdersData] = useState()
  const [loader, setLoader] = useState(false)
  const getOrders = async () => {
    try {
      const ordersInfo = await getOrdersData();
      setOrdersData(ordersInfo)
      setLoader(false)
      console.log(ordersInfo)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoader(true)
    getOrders();

  }, []);
  return (
    <div>
      {loader && <LoaderIcon color={"blue"} size={100} />}
      <Dashboard ordersdata={ordersData} />
    </div>
  );
}

export default App;
