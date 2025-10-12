import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { vendors } from "@/data/vendors";

const VendorDetail = () => {
  const { id } = useParams();
  const vendor = vendors.find((v) => v.id === Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  if (!vendor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container px-4 py-12 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Pedagang Tidak Ditemukan</h1>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Image */}
        <div className="relative w-full h-64 md:h-96">
          <img 
            src={vendor.image} 
            alt={vendor.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          <div className="absolute bottom-6 left-0 right-0 container px-4">
            <Button 
              variant="outline" 
              asChild
              className="mb-4 bg-background/80 backdrop-blur-sm"
            >
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali
              </Link>
            </Button>
            
            <Badge className="bg-primary text-primary-foreground mb-2">
              {vendor.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
              {vendor.name}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="container px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card border border-border/50 rounded-lg p-4 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <h3 className="font-semibold text-foreground">Rating</h3>
                </div>
                <p className="text-2xl font-bold text-secondary">{vendor.rating}</p>
                <p className="text-sm text-muted-foreground">Dari penilaian internal</p>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-4 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Lokasi</h3>
                </div>
                <p className="text-lg font-medium text-foreground">Area Kampus</p>
                <p className="text-sm text-muted-foreground">Dekat dengan gerbang utama</p>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-4 shadow-card">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Jam Buka</h3>
                </div>
                <p className="text-lg font-medium text-foreground">08:00 - 16:00</p>
                <p className="text-sm text-muted-foreground">Senin - Jumat</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Tentang</h2>
              <p className="text-muted-foreground leading-relaxed">
                {vendor.description}
              </p>
            </div>

            {/* Price Range */}
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Kisaran Harga</h2>
              <p className="text-3xl font-bold text-primary">{vendor.priceRange}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Harga dapat berubah sewaktu-waktu
              </p>
            </div>

            {/* Menu Highlights */}
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-card">
              <h2 className="text-2xl font-bold text-foreground mb-4">Menu Unggulan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Menu Spesial</h3>
                  <p className="text-sm text-muted-foreground">
                    Nikmati berbagai pilihan menu terbaik dari pedagang ini
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">Rekomendasi</h3>
                  <p className="text-sm text-muted-foreground">
                    Menu favorit mahasiswa yang wajib dicoba
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <Button 
                asChild 
                size="lg"
                className="gradient-warm text-white font-semibold px-8 hover:opacity-90 transition-opacity shadow-card hover:shadow-hover"
              >
                <Link to="/all-vendors">
                  Lihat Pedagang Lainnya
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorDetail;
