import { Heart, Users, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

const pathways = [
  {
    icon: Heart,
    title: "Survivor Assistance",
    description: "Find immediate help, safety resources, legal assistance, and support programs designed to empower survivors on their path to safety.",
    cta: "Find Help",
    href: "/survivors",
    accent: "coral",
  },
  {
    icon: Users,
    title: "Advocate Corner",
    description: "Access training, toolkits, and resources to strengthen your work supporting survivors across Ohio's 70+ member programs.",
    cta: "Explore Resources",
    href: "/advocates",
    accent: "primary",
  },
  {
    icon: Megaphone,
    title: "Policy & Press",
    description: "Stay informed on Ohio's legislative landscape, read our reports, and find media resources on domestic violence awareness.",
    cta: "View Updates",
    href: "/policy",
    accent: "primary",
  },
];

const AudiencePathways = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How Can We Help You?
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Select your path to find the resources and support most relevant to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pathways.map((p) => (
            <Link
              key={p.title}
              to={p.href}
              className="card-pathway group flex flex-col items-start text-left"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  p.accent === "coral"
                    ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                }`}
              >
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {p.description}
              </p>
              <span
                className={`font-body text-sm font-semibold ${
                  p.accent === "coral" ? "text-accent" : "text-primary"
                } group-hover:underline`}
              >
                {p.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudiencePathways;
