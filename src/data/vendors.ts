import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import food5 from "@/assets/food-5.jpg";
import food6 from "@/assets/food-6.jpg";
import food7 from "@/assets/food-7.jpg";
import food8 from "@/assets/food-8.jpg";

export interface Vendor {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  priceRange: string;
  isFeatured?: boolean;
  location: string;
}

export const vendors: Vendor[] = [
  {
    id: 1,
    name: "Nasi Goreng Bu Siti",
    category: "Makanan Berat",
    description: "Nasi goreng spesial dengan telur dan ayam suwir yang lezat",
    image: food1,
    rating: 4.8,
    priceRange: "Rp 10.000 - Rp 15.000",
    isFeatured: true,
    location: "Gate 1"
  },
  {
    id: 2,
    name: "Es Buah Segar Pak Rudi",
    category: "Minuman",
    description: "Minuman segar dengan berbagai pilihan rasa buah asli",
    image: food2,
    rating: 4.7,
    priceRange: "Rp 5.000 - Rp 10.000",
    isFeatured: true,
    location: "Gate 2",
  },
  {
    id: 3,
    name: "Gorengan Teh Yanti",
    category: "Makanan Ringan",
    description: "Berbagai gorengan crispy dan hangat, cocok untuk cemilan",
    image: food3,
    rating: 4.6,
    priceRange: "Rp 1.000 - Rp 3.000",
    isFeatured: true,
    location: "Gate 1",
  },
  {
    id: 4,
    name: "Mie Ayam Pak Bambang",
    category: "Makanan Berat",
    description: "Mie ayam dengan kuah kaldu yang gurih dan topping melimpah",
    image: food4,
    rating: 4.9,
    priceRange: "Rp 12.000 - Rp 18.000",
    isFeatured: true,
    location: "Gate 3.5",
  },
  {
    id: 5,
    name: "Kue Tradisional Ibu Rina",
    category: "Makanan Ringan",
    description: "Aneka kue tradisional Indonesia yang manis dan lezat",
    image: food5,
    rating: 4.5,
    priceRange: "Rp 2.000 - Rp 5.000",
    location: "Gate 4",
  },
  {
    id: 6,
    name: "Kopi & Teh Mas Aji",
    category: "Minuman",
    description: "Kopi dan teh dengan berbagai varian, dingin maupun panas",
    image: food6,
    rating: 4.7,
    priceRange: "Rp 3.000 - Rp 8.000",
    location: "Gate 1",
  },
  {
    id: 7,
    name: "Sate Ayam Bang Joko",
    category: "Makanan Berat",
    description: "Sate ayam bakar dengan bumbu kacang yang nikmat",
    image: food7,
    rating: 4.8,
    priceRange: "Rp 15.000 - Rp 25.000",
    location: "Gate 2",
  },
  {
    id: 8,
    name: "Bakso Beranak Mas Udin",
    category: "Makanan Berat",
    description: "Bakso dengan berbagai ukuran dan pelengkap yang lengkap",
    image: food8,
    rating: 4.6,
    priceRange: "Rp 10.000 - Rp 20.000",
    location: "Gate 3",
  },
];

export const categories = [
  "Semua",
  "Makanan Berat",
  "Makanan Ringan",
  "Minuman",
];

export const getFeaturedVendors = () => vendors.filter((v) => v.isFeatured);
export const getVendorsByCategory = (category: string) => 
  category === "Semua" ? vendors : vendors.filter((v) => v.category === category);
