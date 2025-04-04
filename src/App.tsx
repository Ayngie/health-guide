import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import HealthArea from "./pages/HealthArea";
import Article from "./pages/Article";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="health/:area"
          element={<HealthArea />}
          errorElement={<NotFound />}
        />
        <Route
          path="health/:area/:articleId"
          element={<Article />}
          errorElement={<NotFound />}
        />
        <Route path="search" element={<Search />} errorElement={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
