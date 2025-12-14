import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container-custom py-12 md:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Join Our Farm Family
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to get special offers, fresh updates, and farm stories delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/30 
                         text-primary-foreground placeholder:text-primary-foreground/50 
                         focus:outline-none focus:border-primary-foreground transition-colors"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground font-medium rounded-full 
                               hover:brightness-110 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="font-serif text-xl font-bold">Irfan Farms</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Bringing the freshest organic produce from our farm directly to your table.
              Committed to sustainable farming and quality you can trust.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Shop All', 'Best Sellers', 'New Arrivals', 'Special Offers', 'Gift Cards'].map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              {['Pure Ghee', 'Organic Flour', 'Cold-Pressed Oils', 'Fresh Dairy', 'Organic Products'].map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  NH60 Faisalabad Road Link, Sargodha, 40100
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  0343-7900297
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@irfanfarms.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  irfan@irfanfarms.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © 2024 Irfan Farms. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
