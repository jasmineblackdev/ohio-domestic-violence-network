import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold">O</span>
              </div>
              <span className="font-heading font-bold text-lg text-background">ODVN</span>
            </div>
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
              links: ["Get Help Now", "Safety Planning", "Legal Resources", "Relocation Program"],
            },
            {
              title: "Advocates",
              links: ["Training Calendar", "Resource Center", "Membership", "Coalition Manager"],
            },
            {
              title: "Organization",
              links: ["About ODVN", "Policy & Press", "Careers", "Donate"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-sm text-background mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm opacity-60 hover:opacity-100 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} Ohio Domestic Violence Network. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
