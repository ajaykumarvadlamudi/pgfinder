export const pgList = [
  {
    id: 1,
    name: "Sunshine PG",
    location: "Annojiguda, Hyderabad",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a2d3b?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1600047500125-6b8c1e1e87c9?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1600585154207-283d0b5a7cf9?auto=format&fit=crop&w=800&q=80",
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
