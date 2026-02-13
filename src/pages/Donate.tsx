import { Heart, DollarSign, Gift, Repeat } from "lucide-react";
import SafetyBanner from "@/components/SafetyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

const amounts = [25, 50, 100, 250, 500];

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        <section className="section-purple py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="font-body text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              Your donation directly supports survivors of domestic violence and strengthens 
              Ohio's network of advocacy programs.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="card-pathway text-center">
              <Heart className="w-10 h-10 text-accent mx-auto mb-6" />
              <h2 className="font-heading text-2xl font-bold text-card-foreground mb-4">Make a Donation</h2>
              <p className="font-body text-sm text-muted-foreground mb-8">
                Choose an amount or enter a custom donation. Every dollar makes a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {amounts.map((a) => (
                  <button
                    key={a}
                    className="px-6 py-3 rounded-lg border-2 border-border font-body font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    ${a}
                  </button>
                ))}
                <button className="px-6 py-3 rounded-lg border-2 border-border font-body font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-colors">
                  Other
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-coral text-base px-8 py-4">
                  <DollarSign className="w-5 h-5 mr-1" /> Donate Once
                </button>
                <button className="btn-outline-light text-base px-8 py-4 !border-primary !text-primary hover:!bg-primary/5">
                  <Repeat className="w-5 h-5 mr-1" /> Monthly Gift
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 section-warm">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">Other Ways to Give</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { icon: Gift, title: "Planned Giving", desc: "Include ODVN in your estate planning to create a lasting legacy." },
                { icon: Heart, title: "Workplace Giving", desc: "Many employers match charitable donations. Ask about matching gifts." },
                { icon: DollarSign, title: "Corporate Partners", desc: "Partner with ODVN to support survivors while amplifying your brand's impact." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5">
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

export default Donate;
