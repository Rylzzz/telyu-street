import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Vendor } from "@/data/vendors";

interface VendorCardProps {
  vendor: Vendor;
}

export const VendorCard = ({ vendor }: VendorCardProps) => {
  return (
    <Link to={`/vendor/${vendor.id}`}>
      <Card className="group overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border/50 cursor-pointer">
        <div className="relative overflow-hidden aspect-video">
        <img 
          src={vendor.image} 
          alt={vendor.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          {vendor.category}
        </Badge>
      </div>
      
      <CardContent className="p-4 space-y-2">
        <h3 className="font-bold text-lg text-foreground line-clamp-1">
          {vendor.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {vendor.description}
        </p>
        
        <div className="flex items-center gap-1 text-secondary">
          <Star className="h-4 w-4 fill-secondary" />
          <span className="font-semibold text-sm">{vendor.rating}</span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 border-t border-border/50">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-primary">
            {vendor.priceRange}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{vendor.location}</span>
          </div>
        </div>
      </CardFooter>
      </Card>
    </Link>
  );
};
