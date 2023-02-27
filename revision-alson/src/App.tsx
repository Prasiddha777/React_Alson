import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/MasterLayout";
import AboutPages from "./pages/AboutPages";
import ContactPage from "./pages/ContactPage";
import HomePages from "./pages/HomePages";

function App() {
  return (
    <BrowserRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<AboutPages />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MasterLayout>
    </BrowserRouter>
  );
}

export default App;
