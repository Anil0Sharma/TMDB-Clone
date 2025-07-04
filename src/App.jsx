import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import PersonDetailPage from "./components/PersonDetailPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":type/:id" element={<DetailPage />} />
          <Route path="/person/:id" element={<PersonDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
