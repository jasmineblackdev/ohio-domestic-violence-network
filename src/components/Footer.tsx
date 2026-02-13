import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold">O</span>
              </div>
              <span className="font-heading font-bold text-lg text-background">ODVN</span>
            </Link>
            <p className="font-body text-sm leading-relaxed opacity-70 mb-6">
              Supporting and strengthening Ohio's response to domestic violence since 1982.
            </p>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <a href="tel:18009349840" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" /> 1-800-934-9840
              </a>
              <a href="mailto:info@odvn.org" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4" /> info@odvn.org
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Columbus, Ohio
              </span>
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Survivors",
              links: [
                { label: "Get Help Now", to: "/get-help" },
                { label: "Safety Planning", to: "/survivors" },
                { label: "Legal Resources", to: "/survivors" },
                { label: "Relocation Program", to: "/survivors" },
              ],
            },
            {
              title: "Advocates",
              links: [
                { label: "Training Calendar", to: "/training" },
                { label: "Resource Center", to: "/advocates" },
                { label: "Membership", to: "/advocates" },
                { label: "Coalition Manager", to: "/advocates" },
              ],
            },
            {
              title: "Organization",
              links: [
                { label: "About ODVN", to: "/about" },
                { label: "Policy & Press", to: "/policy" },
                { label: "Contact", to: "/contact" },
                { label: "Donate", to: "/donate" },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-sm text-background mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} Ohio Domestic Violence Network. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</span>
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Terms</span>
            <span className="hover:opacity-100 transition-opacity cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
