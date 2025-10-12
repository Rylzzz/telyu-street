import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { VendorCard } from "@/components/VendorCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { vendors, categories, getVendorsByCategory } from "@/data/vendors";

const AllVendors = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  
  const filteredVendors = getVendorsByCategory(selectedCategory).filter((vendor) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      vendor.name.toLowerCase().includes(query) ||
      vendor.description.toLowerCase().includes(query) ||
      vendor.category.toLowerCase().includes(query)
    );
  });

  useEffect(() => {
    if (searchQuery) {
      setSelectedCategory("Semua");
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container px-4 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : "Semua Pedagang"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {searchQuery 
                ? `Ditemukan ${filteredVendors.length} pedagang` 
                : "Jelajahi semua pilihan jajanan di area kampus"
              }
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "gradient-warm text-white shadow-card"
                    : "border-primary/30 hover:border-primary"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Vendor Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>

          {/* Empty State */}
          {filteredVendors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {searchQuery 
                  ? `Tidak ada pedagang yang cocok dengan "${searchQuery}"` 
                  : "Tidak ada pedagang dalam kategori ini"
                }
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllVendors;
