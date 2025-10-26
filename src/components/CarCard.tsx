import { Car } from '@/types/car';
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onViewDetails: () => void;
}

const CarCard = ({ car, onViewDetails }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return `$${price.toLocaleString('es-MX')} MXN`;
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={car.image} 
          alt={`${car.name} ${car.year}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
          {car.year}
        </div>
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
          {car.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-foreground">{car.name}</h3>
        <p className="text-muted-foreground text-sm mb-1">{car.details.engine}</p>
        <p className="text-muted-foreground text-sm mb-4 flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {car.details.kilometers}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-accent">{formatPrice(car.price)}</span>
        </div>
        <Button 
          onClick={onViewDetails}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          size="lg"
        >
          Ver Detalles
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
