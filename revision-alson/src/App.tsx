import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPages from "./pages/AboutPages";
import ContactPage from "./pages/ContactPage";
import HomePages from "./pages/HomePages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
