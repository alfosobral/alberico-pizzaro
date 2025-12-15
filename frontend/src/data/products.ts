export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "muzzarella",
    name: "Pizza Muzzarella",
    description: "Salsa de tomate, muzzarella, orégano. Clásica y segura.",
    price: 450,
    image: "https://picsum.photos/seed/muzza/300/200",
    tags: ["pizza", "clasica"],
  },
  {
    id: "fugazzeta",
    name: "Fugazzeta",
    description: "Muzzarella y cebolla, bien cargada.",
    price: 520,
    image: "https://picsum.photos/seed/fugazzeta/300/200",
    tags: ["pizza", "cebolla"],
  },
  {
    id: "napolitana",
    name: "Napolitana",
    description: "Tomate, muzzarella, ajo y un toque de albahaca.",
    price: 540,
    image: "https://picsum.photos/seed/napo/300/200",
    tags: ["pizza"],
  },
];
