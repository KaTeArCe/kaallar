import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import CafeDemo from "./pages/CafeDemo";
import BufeteDemo from "./pages/BufeteDemo";
import ClinicaDemo from "./pages/ClinicaDemo";
import SalonDemo from "./pages/SalonDemo";
import TiendaDemo from "./pages/TiendaDemo";

function Layout() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <main className="bg-[#0D0D0D] text-white min-h-screen">
      {isHome && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cafe" element={<CafeDemo />} />
        <Route path="/bufete" element={<BufeteDemo />} />
        <Route path="/clinica" element={<ClinicaDemo />} />
        <Route path="/salon" element={<SalonDemo />} />
        <Route path="/tienda" element={<TiendaDemo />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;