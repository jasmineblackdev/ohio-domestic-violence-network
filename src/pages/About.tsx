import SafetyBanner from "@/components/SafetyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        <section className="section-purple py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">About ODVN</h1>
            <p className="font-body text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              Since 1982, the Ohio Domestic Violence Network has led the charge in creating 
              a safer Ohio for all.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              ODVN advances the principle that all people have the right to an oppression and 
              violence-free life. We foster changes in our economic, social, and political systems; 
              bring leadership, expertise, and best practices to community programs; and maintain 
              a deep commitment to the empowerment of survivors and their children.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our History</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Founded in 1982, ODVN has grown from a small group of advocates into the state's 
              leading coalition against domestic violence. Today we support more than 70 member 
              programs across all 88 Ohio counties, providing training, resources, and policy 
              advocacy that strengthens Ohio's collective response.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 my-14">
              {[
                { stat: "70+", label: "Member Programs" },
                { stat: "88", label: "Counties Served" },
                { stat: "40+", label: "Years of Service" },
              ].map((item) => (
                <div key={item.label} className="text-center card-pathway">
                  <div className="font-heading text-4xl font-bold text-primary mb-2">{item.stat}</div>
                  <div className="font-body text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Values</h2>
            <ul className="space-y-4 font-body text-muted-foreground leading-relaxed">
              {[
                "Centering survivors in all of our work",
                "Promoting equity, diversity, and inclusion",
                "Advocating for systemic change",
                "Fostering collaboration among member programs",
                "Maintaining accountability and transparency",
              ].map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <QuickExitButton />
    </div>
  );
};

export default About;
