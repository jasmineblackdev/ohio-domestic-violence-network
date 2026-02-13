import { useState } from "react";
import { Menu, X, Phone, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Survivor Assistance", href: "/survivors" },
  { label: "Advocate Corner", href: "/advocates" },
  { label: "Policy & Press", href: "/policy" },
  { label: "About Us", href: "/about" },
  { label: "Training", href: "/training" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top utility bar */}
      <div className="bg-secondary">
        <div className="container mx-auto px-4 py-2 flex items-center justify-end gap-6 text-xs font-body font-medium text-secondary-foreground">
          <Link to="/donate" className="hover:text-accent transition-colors">Donate</Link>
          <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
          <a href="tel:18009349840" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-3 h-3" />
            1.800.934.9840
          </a>
          <button aria-label="Search" className="hover:text-accent transition-colors">
            <Search className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="ODVN Home">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">O</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-heading font-bold text-lg text-foreground leading-tight">ODVN</div>
            <div className="text-[11px] text-muted-foreground font-body leading-tight">
              Ohio Domestic Violence Network
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`px-4 py-2 text-sm font-body font-medium rounded-lg transition-colors ${
                location.pathname === item.href
                  ? "text-primary bg-secondary"
                  : "text-foreground/80 hover:text-primary hover:bg-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/get-help" className="btn-coral ml-3 text-xs !px-5 !py-2.5">
            GET HELP NOW
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-3 text-sm font-body font-medium rounded-lg transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-secondary"
                    : "text-foreground/80 hover:text-primary hover:bg-secondary"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/get-help" className="btn-coral mt-3 text-center" onClick={() => setMobileOpen(false)}>
              GET HELP NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
