import React from "react";
import Navbar from "../../components/Navbar.j/Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import PageTwo from "./PageTwo.jsx";
import BookAppointment from "./BookAppointment.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "../../components/Footer.jsx";

function LandingPage() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <PageTwo />
      <BookAppointment />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
