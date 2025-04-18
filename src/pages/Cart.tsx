
import { useState } from 'react';
import { Trash2, ShoppingCart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ProductProps } from '../components/ProductCard';

// Mock cart items
const initialCartItems: (ProductProps & { quantity: number })[] = [
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds with USB‑C, Active Noise Cancellation",
    price: 219.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 5682,
    image: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UL400_.jpg",
    isPrime: true,
    quantity: 1
  },
  {
    id: 4,
    title: "Kindle Paperwhite (16 GB) – Now with a 6.8\" display and adjustable warm light",
    price: 139.99,
    originalPrice: 159.99,
    rating: 4.7,
    reviewCount: 7890,
    image: "https://m.media-amazon.com/images/I/51QCk82U9cL._AC_UL400_.jpg",
    isPrime: true,
    quantity: 2
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  // Calculate cart totals
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = cartItems.every(item => item.isPrime) ? 0 : 5.99;
  const total = subtotal + shipping;
  
  // Update quantity handler
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  // Remove item handler
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-amazon-lightgray">
      <Header />
      
      <main className="flex-1 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart items */}
            <div className="flex-1">
              <div className="bg-white p-6 rounded shadow">
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                  <h1 className="text-2xl font-bold">Shopping Cart</h1>
                  <span className="text-sm text-gray-500">Price</span>
                </div>
                
                {cartItems.length > 0 ? (
                  <div className="divide-y">
                    {cartItems.map(item => (
                      <div key={item.id} className="py-4 flex">
                        {/* Product image */}
                        <div className="w-24 h-24 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-contain" 
                          />
                        </div>
                        
                        {/* Product details */}
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <h2 className="text-lg font-medium line-clamp-2">{item.title}</h2>
                            <span className="font-bold">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                          
                          {item.isPrime && (
                            <div className="text-xs mt-1 text-amazon-green">
                              <span className="bg-amazon-navy text-white px-1 py-0.5 rounded">Prime</span>
                              <span className="ml-1">FREE Delivery</span>
                            </div>
                          )}
                          
                          <div className="text-sm text-amazon-green mt-1">In Stock</div>
                          
                          {/* Quantity selector and delete button */}
                          <div className="flex items-center mt-3">
                            <select 
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="border rounded p-1 text-sm mr-4"
                            >
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              ))}
                            </select>
                            
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-sm amazon-link flex items-center"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-3" />
                    <h2 className="text-xl font-medium">Your Amazon Cart is empty</h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Shop today's deals
                    </p>
                    <Button className="mt-4 amazon-button-primary">
                      Continue shopping
                    </Button>
                  </div>
                )}
                
                {cartItems.length > 0 && (
                  <div className="text-right mt-4 pt-2 border-t">
                    <div className="text-lg">
                      Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'}): 
                      <span className="font-bold ml-2">${subtotal.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Recommendations */}
              {cartItems.length > 0 && (
                <div className="mt-6 bg-white p-6 rounded shadow">
                  <h2 className="text-lg font-bold mb-4">Customers who bought items in your cart also bought</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {/* Recommended products would go here */}
                    {[1, 2, 3, 4, 5].map(id => (
                      <div key={id} className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-100 flex items-center justify-center mb-2">
                          <img 
                            src={`https://via.placeholder.com/150?text=Item+${id}`}
                            alt={`Recommended item ${id}`}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="text-xs text-center line-clamp-2">
                          Recommended product with a longer title that might wrap
                        </div>
                        <div className="text-xs font-bold mt-1">${(19.99 + id * 10).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Checkout section */}
            {cartItems.length > 0 && (
              <div className="w-full lg:w-80 h-fit">
                <div className="bg-white p-6 rounded shadow">
                  <div className="text-lg">
                    Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'}): 
                    <span className="font-bold ml-2">${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex items-start mt-3">
                    <input 
                      type="checkbox" 
                      id="gift" 
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="gift" className="text-sm">
                      This order contains a gift
                    </label>
                  </div>
                  
                  <Button className="w-full mt-4 amazon-button-primary">
                    Proceed to checkout
                  </Button>
                  
                  {/* Order summary */}
                  <div className="mt-4 pt-4 border-t">
                    <h3 className="font-bold text-sm mb-2">Order Summary</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Items:</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping & handling:</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-bold border-t pt-1 mt-1">
                        <span>Order total:</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
