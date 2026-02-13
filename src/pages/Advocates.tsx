import { BookOpen, Calendar, Users, FolderOpen, Award, ArrowRight } from "lucide-react";
import SafetyBanner from "@/components/SafetyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

const resources = [
  {
    icon: Calendar,
    title: "Training Calendar",
    description: "Browse upcoming trainings, webinars, and continuing education opportunities for advocates.",
  },
  {
    icon: BookOpen,
    title: "Resource Center",
    description: "Access toolkits, best practice guides, and research to strengthen your program's response.",
  },
  {
    icon: Users,
    title: "Membership",
    description: "Learn about ODVN membership benefits and how to join Ohio's network of 70+ programs.",
  },
  {
    icon: FolderOpen,
    title: "Coalition Manager",
    description: "Manage data, reporting, and program information through our secure portal.",
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Advance your career with specialized domestic violence advocate certifications.",
  },
];

const Advocates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        <section className="section-purple py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
              Advocate Corner
            </h1>
            <p className="font-body text-lg opacity-80 mb-6 max-w-2xl mx-auto leading-relaxed">
              Equipping Ohio's domestic violence advocates with the training, tools, 
              and community they need to make a lasting impact.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-14">
              Tools & Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {resources.map((r) => (
                <div key={r.title} className="card-pathway flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <r.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{r.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 section-warm">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Become a Member</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              ODVN membership connects your program to a statewide network of support, training, 
              and advocacy. Together, we strengthen Ohio's response to domestic violence.
            </p>
            <a href="mailto:info@odvn.org" className="btn-coral text-base px-8 py-4">
              Contact Us About Membership
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <QuickExitButton />
    </div>
  );
};

export default Advocates;
