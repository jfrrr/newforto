import HomeSection from "./components/Section/HomeSection";
import AboutSection from "./components/Section/AboutSection";
import SkillSection from "./components/Section/SkillSection";
import ExperienceSection from "./components/Section/ExperienceSection";
import ProjectSection from "./components/Section/ProjectSection";
import CertificateSection from "./components/Section/CertificateSection";
import ContactSection from "./components/Section/ContactSection";
import Footer from "./components/Footer/Footer";

export default function Page() {
  return (
    <div className="overflow-x-hidden">
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <CertificateSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
