import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar";
import EcomPage from "./pages/EcomPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container has-background-light">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/ecom" element={<EcomPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
