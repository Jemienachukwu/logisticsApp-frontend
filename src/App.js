import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import React from "react";
import LoginScreen from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OrderDetails from "./pages/OrderDetails";
import Placeorder from "./pages/Placeorder";
import RequestDeivery from "./pages/RequestDeivery";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
        <Route
          path="/order:id"
          element={
            <Layout>
              <OrderDetails />
            </Layout>
          }
        />
        <Route
          path="/placeorder"
          element={
            <Layout>
              <Placeorder />
            </Layout>
          }
        />
        <Route
          path="/placeorder/requestdeivery"
          element={
            <Layout>
              <RequestDeivery />
            </Layout>
          }
        />
        <Route path="/contact" element={<Layout>Main Content</Layout>} />
        <Route path="/dispatcher" element={<Layout>Main Content</Layout>} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
