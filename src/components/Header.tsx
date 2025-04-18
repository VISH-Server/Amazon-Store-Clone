
import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full bg-amazon-dark text-white">
      {/* Top navigation bar */}
      <div className="container mx-auto px-4 py-2 flex items-center">
        {/* Logo */}
        <div className="mr-4 flex items-center">
          <a href="/" className="text-2xl font-bold text-white">
            amazon<span className="text-amazon-orange">.clone</span>
          </a>
        </div>

        {/* Delivery location */}
        <div className="hidden md:flex items-center mr-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-300 text-xs">Deliver to</span>
            <span className="font-bold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              United States
            </span>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex-1 flex items-center">
          <div className="w-full flex">
            <div className="hidden md:flex items-center bg-white rounded-l-md px-2 text-amazon-dark">
              <select className="bg-transparent h-10 text-sm border-0 focus:outline-none" defaultValue="all">
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="computers">Computers</option>
                <option value="home">Home</option>
                <option value="books">Books</option>
              </select>
            </div>
            <Input 
              type="search"
              placeholder="Search Amazon Clone"
              className="h-10 rounded-none rounded-l-md md:rounded-l-none focus-visible:ring-0 border-0"
            />
            <Button 
              className="h-10 rounded-r-md bg-amazon-yellow hover:bg-amazon-yellow/90 text-amazon-dark" 
              size="icon"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation links */}
        <nav className="ml-6 flex items-center space-x-4">
          {/* Language selector */}
          <div className="hidden lg:flex items-center">
            <span className="font-bold">EN</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>

          {/* Account & Lists */}
          <div className="hidden md:block">
            <div className="flex flex-col">
              <span className="text-xs">Hello, sign in</span>
              <span className="font-bold flex items-center text-sm">
                Account & Lists
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Returns & Orders */}
          <div className="hidden lg:block">
            <div className="flex flex-col">
              <span className="text-xs">Returns</span>
              <span className="font-bold text-sm">& Orders</span>
            </div>
          </div>

          {/* Cart */}
          <a href="/cart" className="flex items-center">
            <div className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-amazon-orange text-amazon-dark rounded-full text-xs font-bold w-5 h-5 flex items-center justify-center">0</span>
            </div>
            <span className="hidden md:inline ml-1 font-bold">Cart</span>
          </a>

          {/* Mobile menu icon */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </div>

      {/* Bottom navigation bar - categories */}
      <div className="bg-amazon-navy py-2 px-4">
        <div className="container mx-auto flex items-center text-sm overflow-x-auto scrollbar-hide">
          <Button variant="ghost" size="sm" className="flex items-center mr-2 text-white">
            <Menu className="h-4 w-4 mr-1" />
            All
          </Button>
          <a href="#" className="whitespace-nowrap mr-4 text-white hover:text-amazon-yellow">Today's Deals</a>
          <a href="#" className="whitespace-nowrap mr-4 text-white hover:text-amazon-yellow">Customer Service</a>
          <a href="#" className="whitespace-nowrap mr-4 text-white hover:text-amazon-yellow">Registry</a>
          <a href="#" className="whitespace-nowrap mr-4 text-white hover:text-amazon-yellow">Gift Cards</a>
          <a href="#" className="whitespace-nowrap mr-4 text-white hover:text-amazon-yellow">Sell</a>
          <a href="#" className="whitespace-nowrap mr-4 text-white font-bold text-amazon-yellow">Prime Day deals</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
