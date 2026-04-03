import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// UI Components
import ConsultationModal from "@/components/ui/consultation-modal"

// Brand Components
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Methodology from "@/pages/Methodology";
import Results from "@/pages/Results";
import About from "@/pages/About";

function App() {
  const [isConsultationModalOpen, setConsultationModalOpen] = useState(false);

  const openModal = () => setConsultationModalOpen(true);
  const closeModal = () => setConsultationModalOpen(false);

  return (
    <Router>
      <Navbar onOpenModal={openModal} />

      <Routes>
        <Route path="/" element={<Home openModal={openModal} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={closeModal}
      />
    </Router>
  );
}

const rootElement = document.getElementById('react-root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
