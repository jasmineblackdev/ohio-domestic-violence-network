import { Calendar, Video, Users, Award } from "lucide-react";
import SafetyBanner from "@/components/SafetyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

const trainings = [
  { date: "Mar 12, 2026", title: "Trauma-Informed Care Fundamentals", format: "Virtual", spots: "Open" },
  { date: "Mar 25, 2026", title: "Legal Advocacy for DV Survivors", format: "In-Person, Columbus", spots: "12 spots" },
  { date: "Apr 8, 2026", title: "Lethality Assessment Protocol Training", format: "Virtual", spots: "Open" },
  { date: "Apr 22, 2026", title: "Economic Empowerment for Survivors", format: "Hybrid", spots: "8 spots" },
  { date: "May 6, 2026", title: "Culturally Specific DV Response", format: "Virtual", spots: "Open" },
];

const Training = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        <section className="section-purple py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">Training & Education</h1>
            <p className="font-body text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              Strengthen your skills and knowledge with ODVN's comprehensive training programs 
              for advocates and allied professionals.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">Upcoming Trainings</h2>
            <div className="space-y-4">
              {trainings.map((t) => (
                <div key={t.title} className="card-pathway flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="sm:w-32 shrink-0">
                    <span className="font-body text-sm font-semibold text-accent">{t.date}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-card-foreground">{t.title}</h3>
                    <p className="font-body text-xs text-muted-foreground mt-1">{t.format} · {t.spots}</p>
                  </div>
                  <button className="btn-coral text-xs !px-5 !py-2.5 shrink-0">Register</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 section-warm">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">Training Formats</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Video, title: "Virtual Webinars", desc: "Live interactive sessions from anywhere in Ohio" },
                { icon: Users, title: "In-Person Workshops", desc: "Hands-on learning at locations across the state" },
                { icon: Calendar, title: "Multi-Day Institutes", desc: "Intensive programs for deep-dive learning" },
                { icon: Award, title: "Certification Tracks", desc: "Earn credentials recognized statewide" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <QuickExitButton />
    </div>
  );
};

export default Training;
