import { Phone, MessageCircle, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import SafetyBanner from "@/components/SafetyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

const GetHelp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        <section className="py-20 lg:py-28" style={{ background: "hsl(var(--safety-red))", color: "white" }}>
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">Get Help Now</h1>
            <p className="font-body text-lg opacity-90 max-w-2xl mx-auto leading-relaxed mb-10">
              If you or someone you know is experiencing domestic violence, help is available 
              right now — 24 hours a day, 7 days a week.
            </p>
            <a href="tel:18009349840" className="inline-flex items-center gap-3 bg-white text-foreground px-8 py-5 rounded-xl font-heading text-2xl font-bold hover:bg-white/90 transition-colors">
              <Phone className="w-7 h-7" /> 1-800-934-9840
            </a>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">Ways to Get Help</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Phone, title: "Call the Hotline", desc: "Speak with a trained advocate confidentially. Available 24/7.", action: "Call Now", href: "tel:18009349840" },
                { icon: MessageCircle, title: "Text Support", desc: "Text 'HELP' to 233733 to connect with a trained advocate via text.", action: "Text HELP", href: "sms:233733" },
                { icon: Shield, title: "Safety Planning", desc: "Work with an advocate to create a personalized plan for your safety.", action: "Learn More", href: "/survivors" },
                { icon: MapPin, title: "Find Local Services", desc: "Locate shelters, counseling, and programs near you in Ohio.", action: "Find Programs", href: "/survivors" },
              ].map((item) => (
                <div key={item.title} className="card-pathway flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{item.desc}</p>
                  {item.href.startsWith("/") ? (
                    <Link to={item.href} className="btn-coral text-sm text-center">{item.action}</Link>
                  ) : (
                    <a href={item.href} className="btn-coral text-sm text-center">{item.action}</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 section-warm">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="font-body text-muted-foreground leading-relaxed">
              <strong className="text-foreground">If you are in immediate danger, call 911.</strong> ODVN's hotline 
              is staffed by trained advocates who can help with safety planning, finding shelter, legal resources, and more.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <QuickExitButton />
    </div>
  );
};

export default GetHelp;
