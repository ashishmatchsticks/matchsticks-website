import ServicesHeader from "./ServicesHeader/ServicesHeader";
import ServicesStats from "./ServicesStats/ServicesStats";
import ServiceDetails from "./ServiceDetails/ServiceDetails";
import ServicesProcess from "./ServicesProcess/ServicesProcess";
import ServicesFAQ from "./ServicesFAQ/ServicesFAQ";
import ServicesCTA from "./ServicesCTA/ServicesCTA";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Services() {
  return (
    <>
      <Navbar />  
      <ServicesHeader />
      <ServicesStats />
      <ServiceDetails />
      <ServicesProcess />
      <ServicesFAQ />
      <ServicesCTA />
      <Footer />
    </>
  );
}

export default Services;