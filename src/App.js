import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import React from "react";
import LoginScreen from "./pages/Login";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Layout>dashboard Content</Layout>} />
        <Route
          path="/orders"
          element={
            <Layout>
              {" "}
              <Orders />
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
