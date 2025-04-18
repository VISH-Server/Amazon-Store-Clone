
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import CategoryCards from '../components/CategoryCards';
import ProductGrid from '../components/ProductGrid';
import CategorySidebar from '../components/CategorySidebar';
import Footer from '../components/Footer';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show back to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-amazon-lightgray">
      <Header />
      
      <main className="flex-1">
        {/* Hero Carousel */}
        <HeroCarousel />
        
        <div className="container mx-auto px-4 -mt-16 relative z-10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Hidden on mobile */}
            <div className="hidden lg:block lg:w-1/4 xl:w-1/5">
              <CategorySidebar />
            </div>
            
            {/* Main content */}
            <div className="w-full lg:w-3/4 xl:w-4/5">
              {/* Category cards */}
              <CategoryCards />
              
              {/* Product grids */}
              <ProductGrid title="Today's Deals" viewAllLink="#" />
              
              <ProductGrid title="Best Sellers in Electronics" viewAllLink="#" />
              
              {/* Additional featured section */}
              <div className="bg-white rounded shadow p-4 mb-6">
                <h2 className="text-xl font-bold mb-4">Featured on Amazon</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="#" className="block relative">
                    <img 
                      src="https://m.media-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469391_2584745_758x608_2X_en_US._SY608_CB609304299_.jpg" 
                      alt="International top sellers"
                      className="w-full h-auto rounded"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-3 rounded">
                      <h3 className="font-bold text-lg">International top sellers</h3>
                      <p className="text-sm text-blue-500 hover:text-amazon-orange hover:underline">See more</p>
                    </div>
                  </a>
                  
                  <a href="#" className="block relative">
                    <img 
                      src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x._SY304_CB573698005_.jpg" 
                      alt="Early Black Friday deals"
                      className="w-full h-auto rounded"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-3 rounded">
                      <h3 className="font-bold text-lg">Early Black Friday deals</h3>
                      <p className="text-sm text-blue-500 hover:text-amazon-orange hover:underline">Shop now</p>
                    </div>
                  </a>
                </div>
              </div>
              
              <ProductGrid title="Frequently repurchased" viewAllLink="#" />
              
              {/* Bottom banner */}
              <div className="mb-8">
                <img 
                  src="https://m.media-amazon.com/images/G/01/AmazonMusic/2022/ACQ/Evergreen/Row/US-EN_100722_F_DEFAULT_ACQ_Banner_ACQ_Refresh_EG_1500x300_5X._CB609922132_.jpg" 
                  alt="Amazon Music promotion"
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Fixed back to top button on mobile */}
      {showBackToTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 right-4 bg-amazon-yellow rounded-full p-3 shadow-lg lg:hidden"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Index;
