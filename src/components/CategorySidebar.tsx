
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    subcategories: ["Accessories & Supplies", "Camera & Photo", "Car & Vehicle Electronics", "Cell Phones & Accessories", "Computers & Accessories", "GPS & Navigation", "Headphones", "Home Audio", "Television & Video", "Wearable Technology"],
  },
  {
    id: 2,
    name: "Computers",
    subcategories: ["Computer Accessories & Peripherals", "Computer Components", "Computers & Tablets", "Data Storage", "Laptops", "Monitors", "Networking Products", "Servers", "Tablet Accessories"],
  },
  {
    id: 3,
    name: "Smart Home",
    subcategories: ["Amazon Devices", "Smart Home Lighting", "Smart Locks & Entry", "Security Cameras & Systems", "Plugs & Outlets", "Heating & Cooling", "Detectors & Sensors", "Smart Speakers"],
  },
  {
    id: 4,
    name: "Arts & Crafts",
    subcategories: ["Painting, Drawing & Art Supplies", "Beading & Jewelry Making", "Crafting", "Fabric", "Sewing", "Needlework", "Organization, Storage & Transport", "Scrapbooking & Stamping"],
  },
  {
    id: 5,
    name: "Automotive",
    subcategories: ["Car Care", "Car Electronics & Accessories", "Exterior Accessories", "Interior Accessories", "Lights & Lighting Accessories", "Motorcycle & Powersports", "Oils & Fluids", "Paint & Paint Supplies"],
  },
  {
    id: 6,
    name: "Baby",
    subcategories: ["Activity & Entertainment", "Apparel & Accessories", "Baby & Toddler Toys", "Baby Care", "Baby Stationery", "Car Seats & Accessories", "Diapering", "Feeding"],
  }
];

const CategorySidebar = () => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold border-b pb-2 mb-3">Shop by Department</h2>
      
      <div className="space-y-2">
        {categories.map(category => (
          <div key={category.id} className="py-1">
            <div className="font-medium hover:text-amazon-orange cursor-pointer">{category.name}</div>
            
            <div className="ml-3 mt-1 space-y-1">
              {category.subcategories.slice(0, 5).map((subcat, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-700 hover:text-amazon-orange cursor-pointer">
                  <ChevronRight className="h-3 w-3 mr-1 text-gray-400" />
                  <span>{subcat}</span>
                </div>
              ))}
              
              {category.subcategories.length > 5 && (
                <div className="text-xs text-blue-500 hover:text-blue-700 hover:underline cursor-pointer pt-1">
                  See all {category.subcategories.length} items
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <h3 className="font-medium mb-2">Help & Settings</h3>
        <div className="space-y-2 text-sm">
          <div className="cursor-pointer hover:text-amazon-orange">Your Account</div>
          <div className="cursor-pointer hover:text-amazon-orange">Customer Service</div>
          <div className="cursor-pointer hover:text-amazon-orange">Sign In</div>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
