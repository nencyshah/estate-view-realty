import { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Square, Star, Verified } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    price: string;
    location: string;
    rating: number;
    beds: number;
    baths: number;
    area: string;
    type: string;
    image: string;
    verified?: boolean;
    featured?: boolean;
    tags?: string[];
  };
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {property.featured && (
            <Badge className="bg-warning text-warning-foreground">Featured</Badge>
          )}
          {property.verified && (
            <Badge className="bg-success text-success-foreground">
              <Verified className="w-3 h-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 right-3 bg-background/90 hover:bg-background transition-all duration-200",
            isFavorite && "text-favorite"
          )}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart 
            className={cn("h-4 w-4", isFavorite && "fill-current")} 
          />
        </Button>

        {/* Property Type */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-background/90">
            {property.type}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title and Rating */}
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <Star className="w-3 h-3 fill-warning text-warning" />
            <span className="text-xs text-muted-foreground">{property.rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span className="text-sm line-clamp-1">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Tags */}
        {property.tags && property.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {property.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs py-0.5 px-2">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Price and Contact */}
        <div className="flex items-center justify-between pt-2 border-t">
          <div>
            <p className="text-lg font-bold text-primary">{property.price}</p>
            <p className="text-xs text-muted-foreground">Negotiable</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Call
            </Button>
            <Button size="sm">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;