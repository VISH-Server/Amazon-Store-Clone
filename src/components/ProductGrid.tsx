
import ProductCard, { ProductProps } from "./ProductCard";

// Mock product data
const mockProducts: ProductProps[] = [
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds with USB‑C, Active Noise Cancellation",
    price: 219.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 5682,
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UL400_.jpg",
    isPrime: true,
    badge: "Limited Time Deal"
  },
  {
    id: 2,
    title: "Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB RAM, 256GB SSD Storage",
    price: 1049.99,
    originalPrice: 1299.99,
    rating: 4.8,
    reviewCount: 1234,
    image: "https://m.media-amazon.com/images/I/81UFHe-hH5L._AC_UL400_.jpg",
    isPrime: true
  },
  {
    id: 3,
    title: "Amazon Fire TV 43\" Omni Series 4K UHD smart TV, hands-free with Alexa",
    price: 329.99,
    originalPrice: 399.99,
    rating: 4.2,
    reviewCount: 3456,
    image: "https://m.media-amazon.com/images/I/71rgQlycML._AC_UL400_.jpg",
    isPrime: true,
    badge: "Deal"
  },
  {
    id: 4,
    title: "Kindle Paperwhite (16 GB) – Now with a 6.8\" display and adjustable warm light",
    price: 139.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviewCount: 7890,
    image: "https://m.media-amazon.com/images/I/51QCk82U9cL._AC_UL400_.jpg",
    isPrime: true
  },
  {
    id: 5,
    title: "Logitech MX Master 3S - Wireless Performance Mouse with Ultra-fast Scrolling",
    price: 89.99,
    originalPrice: 99.99,
    rating: 4.6,
    reviewCount: 2345,
    image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_UL400_.jpg",
    isPrime: true
  },
  {
    id: 6,
    title: "Samsung 85-Inch Class QLED 4K Q60D Series Quantum HDR Smart TV with Alexa Built-in",
    price: 1497.99,
    originalPrice: 1997.99,
    rating: 4.4,
    reviewCount: 1234,
    image: "https://m.media-amazon.com/images/I/71Vf-NkLQbL._AC_UL400_.jpg",
    badge: "Top Seller"
  },
  {
    id: 7,
    title: "Bose QuietComfort Headphones Bluetooth Wireless Noise Cancelling Over Ear Headphones",
    price: 249.00,
    originalPrice: 349.00,
    rating: 4.3,
    reviewCount: 5678,
    image: "https://m.media-amazon.com/images/I/61b8ZxTFZAL._AC_UL400_.jpg",
    isPrime: true
  },
  {
    id: 8,
    title: "Samsung Galaxy Tab S9 Ultra 14.6\" 256GB Android Tablet, Wi-Fi, S Pen, Large, Bezel-Less Display",
    price: 999.99,
    originalPrice: 1199.99,
    rating: 4.7,
    reviewCount: 873,
    image: "https://m.media-amazon.com/images/I/61B0cqfoQUL._AC_UL400_.jpg",
    isPrime: true
  }
];

interface ProductGridProps {
  title: string;
  viewAllLink?: string;
  products?: ProductProps[];
}

const ProductGrid = ({ title, viewAllLink, products = mockProducts }: ProductGridProps) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {viewAllLink && (
          <a href={viewAllLink} className="text-sm text-blue-500 hover:text-blue-700 hover:underline">
            See all deals
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
