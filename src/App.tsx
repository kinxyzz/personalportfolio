import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/elements/Loading";
import Test from "./components/pages/Test";

const Home = lazy(() => import("./components/pages/Home"));
const Blog = lazy(() => import("./components/pages/Blog"));
const Work = lazy(() => import("./components/pages/Work"));
const BlogDetail = lazy(() => import("./components/templates/BlogDetail"));
const BlogTile = lazy(() => import("./components/templates/BlogTile"));
const WorkDetail = lazy(() => import("./components/templates/WorkDetail"));
const WorkTile = lazy(() => import("./components/templates/WorkTile"));
const Header = lazy(() => import("./components/templates/Header"));
const Footer = lazy(() => import("./components/templates/Footer"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/test"} element={<Test />} />
              <Route path={"/blogs"} element={<Blog />}>
                <Route index element={<BlogTile />} />
                <Route path={":id"} element={<BlogDetail />} />
              </Route>
              <Route path={"/works"} element={<Work />}>
                <Route index element={<WorkTile />} />
                <Route path={":id"} element={<WorkDetail />} />
              </Route>
            </Routes>
            <Footer />
          </Suspense>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;

