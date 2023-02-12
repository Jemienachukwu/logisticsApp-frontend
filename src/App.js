import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Orders from "./pages/Orders";
import React, { useState, useEffect } from "react";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>dashboard Content</Layout>} />
        <Route
          path="/orders"
          element={
            <Layout>
              <Orders />
            </Layout>
          }
        />
        <Route path="/contact" element={<Layout>Main Content</Layout>} />
        <Route path="/driver" element={<Layout>Main Content</Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
