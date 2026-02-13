import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SafetyBanner from "@/components/SafetyBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickExitButton from "@/components/QuickExitButton";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SafetyBanner />
      <Header />
      <main className="flex-1">
        <section className="section-purple py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="font-body text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
              We're here to help. Reach out to ODVN for support, information, or to get involved.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Crisis Hotline", value: "1-800-934-9840", href: "tel:18009349840", note: "24/7 Confidential" },
                    { icon: Phone, label: "Office Phone", value: "(614) 781-9651", href: "tel:6147819651" },
                    { icon: Mail, label: "Email", value: "info@odvn.org", href: "mailto:info@odvn.org" },
                    { icon: MapPin, label: "Address", value: "1855 E. Dublin-Granville Rd, Suite 301\nColumbus, OH 43229" },
                    { icon: Clock, label: "Office Hours", value: "Monday – Friday, 8:30 AM – 5:00 PM EST" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-body text-sm font-semibold text-foreground">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="font-body text-sm text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-body text-sm text-muted-foreground whitespace-pre-line">{item.value}</div>
                        )}
                        {item.note && <div className="font-body text-xs text-accent font-semibold mt-0.5">{item.note}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="card-pathway">
                <h2 className="font-heading text-2xl font-bold text-card-foreground mb-6">Send a Message</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1.5">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Your message..." />
                  </div>
                  <button type="submit" className="btn-coral w-full text-base py-4">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <QuickExitButton />
    </div>
  );
};

export default Contact;
