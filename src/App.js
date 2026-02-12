import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Experience";
import CounterSection from "./Components/CounterSection";
import ContactSection from "./Components/ContactUs";
import Footer from "./Components/Footer";
import RagChatBot from "./Components/RagChatBot";
import ShipmentForm from "./Components/ShipmentForm";
import BlogSection from "./Components/BlogSection";

function AppLayout() {
  const location = useLocation();

  // 👇 Hide navbar on shipment page
  const hideNavbar = location.pathname === "/shipments";

  return (
    <>
      {!hideNavbar && <Header />}
      {!hideNavbar && <Hero />}

      <main id="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutUs />
                <Services />
                <CounterSection />
                <BlogSection /> 
                <ContactSection />
                <RagChatBot />
              </>
            }
          />

          <Route path="/shipments" element={<ShipmentForm />} />
        </Routes>
      </main>

      {!hideNavbar && <Footer />}
    </>
  );
}

export default AppLayout;
