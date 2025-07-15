import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FilterSidebar from '@/components/FilterSidebar';
import PropertyCard from '@/components/PropertyCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

// Sample property data
const sampleProperties = [
  {
    id: '1',
    title: 'Luxury 3BHK Apartment in Dwarka',
    price: '₹85 Lacs',
    location: 'Dwarka, New Delhi',
    rating: 4.4,
    beds: 3,
    baths: 2,
    area: '1,250 sq.ft',
    type: 'Apartment',
    image: property1,
    verified: true,
    featured: true,
    tags: ['Ready to Move', 'Gated Community', 'Parking']
  },
  {
    id: '2',
    title: 'Modern Villa with Swimming Pool',
    price: '₹2.5 Cr',
    location: 'Sector 65, Gurgaon',
    rating: 4.6,
    beds: 4,
    baths: 3,
    area: '2,800 sq.ft',
    type: 'Villa',
    image: property2,
    verified: true,
    featured: false,
    tags: ['Swimming Pool', 'Garden', 'Premium']
  },
  {
    id: '3',
    title: 'Furnished 2BHK Near Metro',
    price: '₹45 Lacs',
    location: 'Noida Extension',
    rating: 4.2,
    beds: 2,
    baths: 2,
    area: '980 sq.ft',
    type: 'Apartment',
    image: property3,
    verified: true,
    featured: false,
    tags: ['Metro Connectivity', 'Furnished', 'Investment']
  },
  {
    id: '4',
    title: 'Spacious 4BHK Independent House',
    price: '₹1.2 Cr',
    location: 'Golf Course Road, Gurgaon',
    rating: 4.3,
    beds: 4,
    baths: 3,
    area: '2,200 sq.ft',
    type: 'Independent House',
    image: property1,
    verified: false,
    featured: true,
    tags: ['Independent', 'Parking', 'Terrace']
  },
  {
    id: '5',
    title: 'Premium 1BHK Studio Apartment',
    price: '₹35 Lacs',
    location: 'Sector 62, Noida',
    rating: 4.1,
    beds: 1,
    baths: 1,
    area: '650 sq.ft',
    type: 'Studio',
    image: property2,
    verified: true,
    featured: false,
    tags: ['Studio', 'Modern', 'IT Hub']
  },
  {
    id: '6',
    title: 'Elegant 3BHK with City View',
    price: '₹95 Lacs',
    location: 'Dwarka Expressway',
    rating: 4.5,
    beds: 3,
    baths: 2,
    area: '1,400 sq.ft',
    type: 'Apartment',
    image: property3,
    verified: true,
    featured: false,
    tags: ['City View', 'High Floor', 'Modular Kitchen']
  }
];

const Index = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Properties Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Featured Properties
                </h2>
                <p className="text-muted-foreground">
                  Discover our handpicked selection of premium properties
                </p>
              </div>
              
              <Button
                variant="outline"
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            <div className="flex gap-6">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block">
                <FilterSidebar 
                  isOpen={true} 
                  onClose={() => {}} 
                />
              </div>

              {/* Mobile/Tablet Sidebar */}
              <FilterSidebar 
                isOpen={isFilterOpen} 
                onClose={() => setIsFilterOpen(false)} 
              />

              {/* Properties Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sampleProperties.map((property) => (
                    <PropertyCard 
                      key={property.id} 
                      property={property} 
                    />
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Properties
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
