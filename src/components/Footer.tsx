import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40 bg-muted/30 mt-20">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="JajanU" className="h-10 w-10" />
              <span className="text-2xl font-bold text-primary">Telyu Street</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Platform informasi jajanan terlengkap di area kampus. 
              Temukan berbagai pilihan makanan dan minuman favoritmu!
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Link Cepat</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Beranda
              </Link>
              <Link to="/all-vendors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Kategori
              </Link>
              <Link to="/cheapest" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Jajanan Termurah
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Ikuti Kami</h3>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-foreground hover:bg-foreground/90 text-background transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/40 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Telyu Street. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
