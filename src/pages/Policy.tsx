import { FileText, Megaphone, BarChart3, ExternalLink } from "lucide-react";
import SafetyBanner from "@/components/SafetyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

const updates = [
  {
    date: "February 2026",
    title: "Ohio House Bill 47: Expanded Protections for Survivors",
    summary: "New legislation strengthens protection order enforcement and adds economic abuse to statutory definitions.",
  },
  {
    date: "January 2026",
    title: "ODVN Annual Report Released",
    summary: "Our 2025 report highlights key outcomes, policy wins, and the growing need for DV services statewide.",
  },
  {
    date: "December 2025",
    title: "Federal VAWA Reauthorization Update",
    summary: "Latest updates on Violence Against Women Act funding and new provisions for underserved populations.",
  },
];

const Policy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        <section className="section-purple py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Policy & Press
            </h1>
            <p className="font-body text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              Stay informed on Ohio's legislative landscape, our policy priorities, 
              and media resources for domestic violence awareness.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">
              Latest Updates
            </h2>
            <div className="space-y-6">
              {updates.map((u) => (
                <div key={u.title} className="card-pathway">
                  <span className="font-body text-xs font-semibold text-accent uppercase tracking-wider">{u.date}</span>
                  <h3 className="font-heading text-xl font-bold text-card-foreground mt-2 mb-3">{u.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{u.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 section-warm">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">Our Focus Areas</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { icon: Megaphone, title: "Legislative Advocacy", desc: "We work with state legislators to strengthen domestic violence laws and improve survivor protections." },
                { icon: BarChart3, title: "Research & Data", desc: "Publishing research and data to inform evidence-based policy and community responses." },
                { icon: FileText, title: "Media Resources", desc: "Press releases, fact sheets, and expert commentary for journalists and media professionals." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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

export default Policy;
