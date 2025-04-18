
const categories = [
  {
    id: 1,
    title: "Electronics",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Computers & Accessories",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Home & Kitchen",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Beauty picks",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Health & Household",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Deals & Promotions",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg",
    link: "#",
  },
  {
    id: 7,
    title: "New arrivals in Toys",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg",
    link: "#",
  },
  {
    id: 8,
    title: "Discover fashion trends",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2023/March/mp_20230219_FF_desktopsinglecategory_desktop_379x304._SY304_CB612639047_.jpg",
    link: "#",
  },
];

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      {categories.map((category) => (
        <div 
          key={category.id} 
          className="bg-white p-5 rounded shadow flex flex-col"
        >
          <h2 className="text-xl font-bold mb-3">{category.title}</h2>
          
          <a href={category.link} className="mt-auto">
            <div className="overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <p className="text-sm text-blue-500 mt-3 hover:text-amazon-orange hover:underline">
              Shop now
            </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
