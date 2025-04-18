
import { Star } from "lucide-react";
import { Button } from "./ui/button";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  isPrime?: boolean;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const { title, price, originalPrice, rating, reviewCount, image, badge, isPrime } = product;
  
  // Calculate discount percentage if original price exists
  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  // Create an array of 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => ({
    filled: i < Math.floor(rating),
    half: i === Math.floor(rating) && rating % 1 !== 0,
  }));

  return (
    <div className="bg-white p-4 rounded border border-gray-200 hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Badge (if any) */}
      {badge && (
        <div className="bg-amazon-yellow text-amazon-dark text-xs font-bold px-2 py-1 absolute top-2 left-2 z-10 rounded">
          {badge}
        </div>
      )}
      
      {/* Product Image */}
      <div className="relative mb-3 pt-[100%]">
        <img 
          src={image} 
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-contain" 
        />
      </div>
      
      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-sm line-clamp-2 mb-1 flex-grow">
          {title}
        </h3>
        
        {/* Ratings */}
        <div className="flex items-center mb-1">
          <div className="flex text-amazon-orange">
            {stars.map((star, index) => (
              <span key={index} className="text-amazon-orange">
                {star.filled ? (
                  <Star className="h-3 w-3 fill-current" />
                ) : star.half ? (
                  <div className="relative h-3 w-3">
                    <Star className="h-3 w-3 absolute top-0 left-0 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                    <Star className="h-3 w-3 absolute top-0 left-0" />
                  </div>
                ) : (
                  <Star className="h-3 w-3" />
                )}
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">{reviewCount.toLocaleString()}</span>
        </div>
        
        {/* Price */}
        <div className="mb-2">
          {originalPrice && (
            <div className="flex items-center">
              <span className="text-xs line-through text-gray-500">${originalPrice.toFixed(2)}</span>
              <span className="ml-2 text-xs text-amazon-green">-{discountPercentage}%</span>
            </div>
          )}
          <div className="flex items-baseline">
            <span className="text-sm">$</span>
            <span className="text-lg font-bold">{Math.floor(price)}</span>
            <span className="text-sm">{(price % 1).toFixed(2).substring(1)}</span>
          </div>
        </div>
        
        {/* Prime badge */}
        {isPrime && (
          <div className="mb-2">
            <span className="text-xs bg-amazon-navy text-white px-1 py-0.5 rounded">Prime</span>
            <span className="text-xs text-gray-500 ml-1">FREE Delivery</span>
          </div>
        )}
        
        {/* Add to Cart Button */}
        <Button className="mt-auto w-full bg-amazon-yellow hover:bg-amazon-yellow/90 text-amazon-dark text-sm">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
