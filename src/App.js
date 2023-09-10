import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/menus/:menu" element={<Menus />} />
          <Route path="/products/:menu/:id" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
