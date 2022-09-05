
// import './App.css';
import React, { useEffect, useState } from "react";
import Dashboard from './pages/dashboard'
import { getOrdersMetrics } from './api/api'

function App() {
  const [ordersData, setOrdersData] = useState()
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersMetrics = await getOrdersMetrics();
        setOrdersData(ordersMetrics)
        console.log(ordersMetrics)
      } catch (error) {
        console.log(error);
        /* Workaround to detect unauthorized 401 which means not logged in */
        if ((error.message ?? "").indexOf("401") !== false) {
        }
      }
    };

    fetchOrders();
  }, []);
  return (
    <div>
      <Dashboard ordersdata={ordersData} />
    </div>
  );
}

export default App;
