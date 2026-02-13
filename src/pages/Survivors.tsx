import { Phone, Shield, Scale, MapPin, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafetyBanner from "@/components/SafetyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

const resources = [
  {
    icon: Phone,
    title: "Crisis Hotline",
    description: "Call our 24/7 confidential hotline for immediate support and safety planning.",
    cta: "Call 1-800-934-9840",
    href: "tel:18009349840",
    external: true,
  },
  {
    icon: Shield,
    title: "Safety Planning",
    description: "Create a personalized safety plan to protect yourself and your children in an emergency.",
    cta: "Start Planning",
    href: "/survivors#safety-planning",
  },
  {
    icon: Scale,
    title: "Legal Resources",
    description: "Access free legal aid, protection orders, and information about your rights under Ohio law.",
    cta: "Learn More",
    href: "/survivors#legal",
  },
  {
    icon: MapPin,
    title: "Find Local Programs",
    description: "Locate shelters, counseling, and support services in your area across Ohio's 88 counties.",
    cta: "Find Programs",
    href: "/survivors#programs",
  },
  {
    icon: Heart,
    title: "Relocation Program",
    description: "Our Address Confidentiality Program helps survivors establish a new, safe address.",
    cta: "Learn More",
    href: "/survivors#relocation",
  },
];

const Survivors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="section-purple py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              You Are Not Alone
            </h1>
            <p className="font-body text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're currently experiencing abuse or have in the past, help is available. 
              ODVN connects you to resources across Ohio — confidentially and at no cost.
            </p>
            <a href="tel:18009349840" className="btn-coral text-base px-8 py-4">
              <Phone className="w-5 h-5 mr-2" /> Call the Hotline Now
            </a>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">
              Resources for Survivors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {resources.map((r) => (
                <div key={r.title} className="card-pathway flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{r.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{r.description}</p>
                  {r.external ? (
                    <a href={r.href} className="font-body text-sm font-semibold text-accent hover:underline flex items-center gap-1">
                      {r.cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="font-body text-sm font-semibold text-accent flex items-center gap-1">
                      {r.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Planning Section */}
        <section id="safety-planning" className="py-20 section-warm">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Safety Planning</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              A safety plan is a personalized, practical plan that helps you avoid dangerous situations 
              and know the best way to react when you're in danger. It includes information specific to 
              your life and gives you strategies for keeping safe.
            </p>
            <div className="bg-card rounded-xl p-8 text-left" style={{ boxShadow: "var(--shadow-card)" }}>
              <h3 className="font-heading text-lg font-bold text-card-foreground mb-4">Key Steps in Safety Planning</h3>
              <ul className="space-y-3 font-body text-sm text-muted-foreground">
                {[
                  "Identify safe areas of the house where there are no weapons",
                  "Establish a code word with family, friends, and neighbors",
                  "Keep important documents and essentials in an accessible place",
                  "Know the phone numbers of local shelters and hotlines",
                  "Plan where you will go if you have to leave home",
                  "Contact ODVN for personalized assistance",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <QuickExitButton />
    </div>
  );
};

export default Survivors;
