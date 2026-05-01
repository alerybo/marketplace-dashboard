import { House, Sheet, Users } from "lucide-react";

export const sidebarItems = [
  {
    id: 1,
    icon: House,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    icon: Users,
    label: "All Users",
    href: "/all-users",
  },
  {
    id: 3,
    icon: Sheet,
    label: "Listings",
    href: "/listings",
  },
];

export const listings = [
  {
    id: 1,
    title: "Handmade Ceramic Coffee Mug",
    imageUrls: ["/listing1.png", "/listing2.png"],
    category: "Home & Living",
    tags: ["ceramic", "handmade", "coffee", "mug", "pottery"],
    price: "24.99",
  },
  {
    id: 2,
    title: "Minimalist Gold Bar Necklace",
    imageUrls: ["/listing3.png"],
    category: "Jewelry",
    tags: ["gold", "minimalist", "necklace", "jewelry"],
    price: "18.50",
  },
  {
    id: 3,
    title: "Printable Weekly Planner PDF",
    imageUrls: ["/listing4.png"],
    category: "Digital Downloads",
    tags: ["planner", "printable", "productivity", "pdf", "organization"],
    price: "5.00",
  },
  {
    id: 4,
    title: "Soy Wax Lavender Scented Candle",
    imageUrls: ["/listing7.png"],
    category: "Home & Living",
    tags: ["candle", "soy wax", "lavender", "aromatherapy", "handmade"],
    price: "12.75",
  },
];
