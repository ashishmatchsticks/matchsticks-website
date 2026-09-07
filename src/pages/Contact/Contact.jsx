import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ContactFAQ from "./ContactFAQ/ContactFAQ";
import ContactForm from "./ContactForm/ContactForm";
import ContactHeader from "./ContactHeader/ContactHeader";
import ContactMap from "./ContactMap/ContactMap";

 function Contact() {
  return (
    <>
    <Navbar />
      <ContactHeader />
      <ContactForm />
      <ContactMap />
      <ContactFAQ />
      <Footer />
    </>
  );
}

export default Contact;