import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />
      <div className="absolute inset-0" style={{ background: "var(--overlay-gradient)" }} />
      <div className="relative container mx-auto px-4 py-24 max-w-3xl text-center">
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
          Everyone Deserves a Life Free from Violence
        </h1>
        <p className="text-lg sm:text-xl font-body leading-relaxed mb-10 text-primary-foreground/85 max-w-2xl mx-auto">
          The Ohio Domestic Violence Network supports survivors, strengthens Ohio's response to
          domestic violence, and advocates for systemic change.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/get-help" className="btn-coral text-base px-8 py-4">Get Help Now</Link>
          <Link to="/about" className="btn-outline-light text-base px-8 py-4">Learn About ODVN</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
