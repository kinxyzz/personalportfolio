import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/templates/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/blog" element={<div className="h-[100vh]">Blog</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
