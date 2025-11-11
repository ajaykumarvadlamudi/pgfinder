export const pgList = [
  {
    id: 1,
    name: "Sunshine PG",
    location: "Annojiguda, Hyderabad",
    image: "https://d2bxpw04qb5rhq.cloudfront.net/production/property_image/image/109440/f35be59043b84a76aa5d1b6f3b65fb31bd7a2ed1298d2a19c8dde7ded4042d307bc39952c341865c/large_74c1619c-ccbd-4c3b-95b8-afaa7a85c4c7.jpg",
    description:
      "Located near Infosys DC, Sunshine PG offers clean rooms, high-speed WiFi, and home-style meals.",
    sharingOptions: [
      { type: 4, price: 5500, vacancy: 3 },
      { type: 3, price: 6500, vacancy: 1 },
      { type: 2, price: 8000, vacancy: 0 }
    ],
    foodPlan: {
      type: "Mixed", // Veg + Non-Veg
      schedule: {
        veg: ["Mon", "Tue", "Thu", "Sat", "Sun"],
        nonVeg: ["Wed", "Fri"]
      },
      details:
        "Veg meals provided 5 days a week, Non-veg twice (Wed & Fri). Breakfast and dinner included."
    }
  },
  {
    id: 2,
    name: "GreenView PG",
    location: "Gachibowli, Hyderabad",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/613750746.jpg?k=aa4452943fa4cde50d762708e43dee4087c2bb702d1a2de791439623946569c0&o=",
    description:
      "GreenView PG is ideal for IT professionals, offering peaceful surroundings and healthy food.",
    sharingOptions: [
      { type: 3, price: 6000, vacancy: 2 },
      { type: 2, price: 7200, vacancy: 1 }
    ],
    foodPlan: {
      type: "Veg Only",
      schedule: {
        veg: ["All days"],
        nonVeg: []
      },
      details:
        "Fully vegetarian PG. Provides South Indian and North Indian dishes, breakfast + dinner."
    }
  },
  {
    id: 3,
    name: "CityNest PG",
    location: "Madhapur, Hyderabad",
    image: "https://content.jdmagicbox.com/v2/comp/hyderabad/i2/040pxx40.xx40.230613042038.h3i2/catalogue/k-n-reddy-pg-for-women-s-gowlidoddy-hyderabad-dormitory-services-y3RAEBxBsu.jpg",
    description:
      "Modern accommodation with AC rooms, power backup, and weekend cleaning service.",
    sharingOptions: [
      { type: 3, price: 7000, vacancy: 2 },
      { type: 2, price: 8500, vacancy: 1 }
    ],
    foodPlan: {
      type: "Mixed",
      schedule: {
        veg: ["Mon", "Tue", "Wed", "Thu", "Sat"],
        nonVeg: ["Fri", "Sun"]
      },
      details:
        "Veg meals 5 days a week, Non-veg on Fridays and Sundays. Includes breakfast and dinner."
    }
  }
];
