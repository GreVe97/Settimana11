import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./pages/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavouritesCompany from "./pages/FavouritesCompany";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouritesCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
