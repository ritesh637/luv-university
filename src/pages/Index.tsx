import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedNews from "@/components/FeaturedNews";
import StatsSection from "@/components/StatsSection";
import AcademicsSection from "@/components/AcademicsSection";
import EventsSection from "@/components/EventsSection";
import EditorialSection from "@/components/EditorialSection";
import CampusGallery from "@/components/CampusGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <UtilityBar />
      <Header />
      <main>
        <HeroSection />
        <FeaturedNews />
        <StatsSection />
        <AcademicsSection />
        <EventsSection />
        <EditorialSection />
        <CampusGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
