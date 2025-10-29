import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CatCardProps {
  id: number;
  image: string;
  name: string;
  category: string;
  onFavoriteToggle: (id: number) => void;
  isFavorite: boolean;
}

export default function CatCard({ id, image, name, category, onFavoriteToggle, isFavorite }: CatCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="group relative overflow-hidden rounded-2xl border-0 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in">
      <div className="relative aspect-square overflow-hidden bg-muted">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-pulse" />
        )}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 rounded-full shadow-lg"
          onClick={() => onFavoriteToggle(id)}
        >
          <Icon
            name="Heart"
            className={`h-5 w-5 transition-colors duration-300 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </Button>
      </div>
      
      <div className="p-4 bg-gradient-to-br from-white to-gray-50">
        <h3 className="font-bold text-lg mb-1 text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {name}
        </h3>
        <p className="text-sm text-muted-foreground flex items-center gap-1" style={{ fontFamily: 'Open Sans, sans-serif' }}>
          <Icon name="Tag" className="h-3 w-3" />
          {category}
        </p>
      </div>
    </Card>
  );
}
