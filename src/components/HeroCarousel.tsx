import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getFeaturedVendors } from "@/data/vendors";

export const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredVendors = getFeaturedVendors();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredVendors.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredVendors.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? featuredVendors.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredVendors.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl">
        {featuredVendors.map((vendor, index) => (
          <Card
            key={vendor.id}
            className={`absolute inset-0 transition-all duration-500 border-primary/20 shadow-card ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <CardContent className="flex flex-col md:flex-row gap-6 p-6">
              <div className="relative w-full md:w-48 aspect-square md:aspect-auto overflow-hidden rounded-xl">
                <img
                  src={vendor.image}
                  alt={vendor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 flex flex-col justify-center space-y-3">
                <Badge className="w-fit bg-secondary text-secondary-foreground">
                  {vendor.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {vendor.name}
                </h3>
                <p className="text-muted-foreground">
                  {vendor.description}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-secondary">
                    <Star className="h-5 w-5 fill-secondary" />
                    <span className="font-bold text-lg">{vendor.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm font-medium text-primary">
                    {vendor.priceRange}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background border-primary/20"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur hover:bg-background border-primary/20"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {featuredVendors.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
