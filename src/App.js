import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Orders from "./pages/Orders";
function App() {
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
