export const products = [
  {
    id: 1,
    name: "Batom Nude Vintage",
    category: "lipstick",
    price: 49.9,
    colors: [
      { name: "Nude Rosé", hex: "#D4A088" },
      { name: "Nude Coral", hex: "#E5A078" },
      { name: "Nude Bege", hex: "#C89B7B" },
    ],
    image: "/products.png",
    description: "Batom de longa duração com acabamento cremoso",
  },
  {
    id: 2,
    name: "Batom Rosa Clássico",
    category: "lipstick",
    price: 52.9,
    colors: [
      { name: "Rosa Bebê", hex: "#FFB6C1" },
      { name: "Rosa Pink", hex: "#FF6B9D" },
      { name: "Rosa Choque", hex: "#FF1493" },
    ],
    image: "/products.png",
    description: "Pigmentação intensa e conforto o dia todo",
  },
  {
    id: 3,
    name: "Batom Vermelho Power",
    category: "lipstick",
    price: 54.9,
    colors: [
      { name: "Vermelho Coral", hex: "#FF7B6B" },
      { name: "Vermelho Clássico", hex: "#DC143C" },
      { name: "Vermelho Vinho", hex: "#A0153E" },
    ],
    image: "/products.png",
    description: "O vermelho perfeito para arrasar",
  },
  {
    id: 4,
    name: "Batom Berry Dream",
    category: "lipstick",
    price: 49.9,
    colors: [
      { name: "Berry Natural", hex: "#C17B8D" },
      { name: "Berry Intenso", hex: "#A0153E" },
      { name: "Berry Roxo", hex: "#8B4789" },
    ],
    image: "/products.png",
    description: "Tons vibrantes de berry para um look moderno",
  },
  {
    id: 5,
    name: "Batom Plum Elegance",
    category: "lipstick",
    price: 56.9,
    colors: [
      { name: "Plum Suave", hex: "#B47FB8" },
      { name: "Plum Profundo", hex: "#8B4789" },
      { name: "Plum Escuro", hex: "#6B3968" },
    ],
    image: "/products.png",
    description: "Sofisticação em tons de ameixa",
  },
  {
    id: 6,
    name: "Batom Coral Sunset",
    category: "lipstick",
    price: 48.9,
    colors: [
      { name: "Coral Claro", hex: "#FF9F80" },
      { name: "Coral Vibrante", hex: "#FF7B6B" },
      { name: "Coral Queimado", hex: "#E9765B" },
    ],
    image: "/products.png",
    description: "Cor vibrante perfeita para o verão",
  },
];

export const newArrivals = products.slice(0, 4);

export const categories = [
  {
    id: "stores",
    name: "Lojas e Marcas",
    image: "/category-stores.png",
    description: "Descubra nossas lojas parceiras",
  },
  {
    id: "tips",
    name: "Dicas de Maquiagem",
    image: "/category-tips.png",
    description: "Aprenda técnicas profissionais",
  },
];
