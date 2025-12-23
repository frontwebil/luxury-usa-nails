import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PricesPage from "./pages/PricesPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        theme="light"
        // hideProgressBar={true}
        autoClose={3000}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prices" element={<PricesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
