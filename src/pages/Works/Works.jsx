import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import WorksCaseStudy from "./WorksCaseStudy/WorksCaseStudy";
import WorksCTA from "./WorksCTA/WorksCTA";
import WorksGrid from "./WorksGrid/WorksGrid";
import WorksHeader from "./WorksHeader/WorksHeader";
import WorksStats from "./WorksStats/WorksStats";

 function WorkPage() {
  return (
    <>
      <Navbar />  
      <WorksHeader />
      <WorksStats />
      <WorksGrid />
      <WorksCaseStudy />
      <WorksCTA />
      <Footer />
    </>
  );
}

export default WorkPage;