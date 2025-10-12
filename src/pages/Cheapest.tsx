import { Navbar } from "@/components/Navbar";
import { VendorCard } from "@/components/VendorCard";
import { Footer } from "@/components/Footer";
import { vendors } from "@/data/vendors";
import { TrendingDown } from "lucide-react";

const Cheapest = () => {
  // Sort vendors by price (parsing the lower bound of price range)
  const cheapestVendors = [...vendors].sort((a, b) => {
    const priceA = parseInt(a.priceRange.match(/\d+/)?.[0] || "0");
    const priceB = parseInt(b.priceRange.match(/\d+/)?.[0] || "0");
    return priceA - priceB;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container px-4 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/20 mb-4">
              <TrendingDown className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Jajanan Termurah
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pilihan jajanan ekonomis untuk mahasiswa yang ingin hemat tanpa mengurangi kualitas rasa
            </p>
          </div>


          {/* Vendor Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cheapestVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cheapest;
