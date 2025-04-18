
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full mt-auto">
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        className="w-full bg-amazon-navy hover:bg-amazon-navy/90 text-white py-3 text-sm"
      >
        <div className="flex items-center justify-center">
          <ArrowUp className="h-4 w-4 mr-2" />
          <span>Back to top</span>
        </div>
      </button>

      {/* Main footer content */}
      <div className="bg-amazon-dark text-white p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="font-bold mb-3">Get to Know Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white hover:underline">Careers</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Blog</a></li>
                <li><a href="#" className="hover:text-white hover:underline">About Amazon</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Amazon Devices</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Amazon Science</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-bold mb-3">Make Money with Us</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white hover:underline">Sell products on Amazon</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Sell on Amazon Business</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Sell apps on Amazon</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Become an Affiliate</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Advertise Your Products</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Self-Publish with Us</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Host an Amazon Hub</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-bold mb-3">Amazon Payment Products</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white hover:underline">Amazon Business Card</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Shop with Points</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Reload Your Balance</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Amazon Currency Converter</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-bold mb-3">Let Us Help You</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white hover:underline">Amazon and COVID-19</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Your Account</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Your Orders</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Shipping Rates & Policies</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Returns & Replacements</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Manage Your Content and Devices</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Amazon Assistant</a></li>
                <li><a href="#" className="hover:text-white hover:underline">Help</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-6"></div>

          {/* Logo and language selector */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <a href="/" className="text-2xl font-bold">
                amazon<span className="text-amazon-orange">.clone</span>
              </a>
            </div>

            <div className="flex space-x-4">
              <select className="bg-amazon-dark text-white border border-gray-600 rounded px-2 py-1 text-sm">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
              </select>
              
              <select className="bg-amazon-dark text-white border border-gray-600 rounded px-2 py-1 text-sm">
                <option>$ USD - U.S. Dollar</option>
                <option>€ EUR - Euro</option>
                <option>£ GBP - British Pound</option>
              </select>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="text-center text-gray-400 text-xs mt-6">
            <p>Conditions of Use | Privacy Notice | Interest-Based Ads</p>
            <p className="mt-1">© 1996-{new Date().getFullYear()}, Amazon Clone, Inc. or its affiliates</p>
            <p className="mt-2">This is a demo clone project. Not the real Amazon.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
