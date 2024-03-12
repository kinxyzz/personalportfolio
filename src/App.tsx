import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blog from "./components/pages/Blog";
import Home from "./components/pages/Home";
import Work from "./components/pages/Work";
import BlogDetail from "./components/templates/BlogDetail";
import BlogTile from "./components/templates/BlogTile";
import Footer from "./components/templates/Footer";
import Header from "./components/templates/Header";
import WorkDetail from "./components/templates/WorkDetail";
import WorkTile from "./components/templates/WorkTile";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/blogs"} element={<Blog />}>
            <Route index element={<BlogTile />} />
            <Route path={":id"} element={<BlogDetail />} />
          </Route>
          <Route path={"/works"} Component={Work} element={<Work />}>
            <Route index element={<WorkTile />} />
            <Route path={":id"} element={<WorkDetail />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
