import SafetyBanner from "@/components/SafetyBanner";
import QuickExitButton from "@/components/QuickExitButton";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AudiencePathways from "@/components/AudiencePathways";
import MissionSection from "@/components/MissionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        <Hero />
        <AudiencePathways />
        <MissionSection />
      </main>
      <Footer />
      <QuickExitButton />
    </div>
  );
};

export default Index;
