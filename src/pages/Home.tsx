import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { VendorCard } from "@/components/VendorCard";
import { Footer } from "@/components/Footer";
import { vendors } from "@/data/vendors";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const recommendedVendors = vendors.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative w-full py-20 md:py-32"
        style={{
          backgroundImage: `url("https://smb.telkomuniversity.ac.id/wp-content/uploads/2024/03/5-Fasilitas-Unggulan-Telkom-University-PTS-Nomor-1-di-Indonesia.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 gradient-hero" />
        
        <div className="container relative z-10 px-4">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Temukan Jajanan Favorit di Telkom University
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Jelajahi berbagai pilihan makanan dan minuman lezat dari pedagang terpercaya di sekitar kampus
            </p>
          </div>
          
        </div>
      </section>

      {/* Quick Action */}
      <section className="container px-4 -mt-8 relative z-20">
        <Link to="/cheapest">
          <div className="bg-secondary hover:bg-secondary/90 rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                  <TrendingDown className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-secondary-foreground">Jajanan Termurah</h3>
                  <p className="text-sm text-secondary-foreground/80">Hemat dengan pilihan jajanan ekonomis</p>
                </div>
              </div>
              <ArrowRight className="h-6 w-6 text-secondary-foreground group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </section>

      {/* Rekomendasi Section */}
      <section className="container px-4 py-16">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Rekomendasi Jajanan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilihan jajanan populer dan favorit mahasiswa
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {recommendedVendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="gradient-warm text-white font-semibold px-8 hover:opacity-90 transition-opacity shadow-card hover:shadow-hover"
          >
            <Link to="/all-vendors">
              Lihat Semua Pedagang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
