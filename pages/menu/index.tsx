import Head from "next/head"
import { useState } from "react"

type MenuItem = {
  id: number
  name: string
  price: string
  description: string
}

type MenuCategory = "food" | "sweet" | "drinks"

type MenuItems = {
  [key in MenuCategory]: MenuItem[]
}

const menuItems: MenuItems = {
  food: [
    {
      id: 1,
      name: "Tajine de Poulet aux Olives",
      price: "160DH",
      description: "Poulet mijoté avec des olives et citrons confits",
    },
    {
      id: 2,
      name: "Couscous Royal",
      price: "200DH",
      description: "Semoule, légumes, agneau, poulet et merguez",
    },
    {
      id: 3,
      name: "Pastilla au Pigeon",
      price: "180DH",
      description: "Feuilleté sucré-salé farci au pigeon et aux amandes",
    },
    {
      id: 4,
      name: "Méchoui d'Agneau",
      price: "220DH",
      description: "Agneau rôti aux épices marocaines",
    },
    {
      id: 5,
      name: "Harira",
      price: "100DH",
      description:
        "Soupe traditionnelle aux lentilles, pois chiches et tomates",
    },
    {
      id: 6,
      name: "Rfissa",
      price: "170DH",
      description: "Poulet effiloché sur un lit de msemen aux lentilles",
    },
  ],
  sweet: [
    {
      id: 7,
      name: "Corne de Gazelle",
      price: "50DH",
      description: "Pâtisserie en forme de croissant fourrée aux amandes",
    },
    {
      id: 8,
      name: "Chebakia",
      price: "40DH",
      description: "Pâtisserie en forme de fleur, frite et enrobée de miel",
    },
    {
      id: 9,
      name: "M'hanncha",
      price: "60DH",
      description: "Gâteau roulé aux amandes en forme de serpentin",
    },
    {
      id: 10,
      name: "Sfenj",
      price: "30DH",
      description: "Beignet traditionnel marocain",
    },
    {
      id: 11,
      name: "Ghoriba",
      price: "40DH",
      description: "Biscuits sablés aux amandes ou aux cacahuètes",
    },
    {
      id: 12,
      name: "Halwa Chebakia",
      price: "50DH",
      description:
        "Pâtisserie en nid d'abeille au miel et aux graines de sésame",
    },
  ],
  drinks: [
    {
      id: 13,
      name: "Thé à la Menthe",
      price: "30DH",
      description: "Thé vert avec menthe fraîche et sucre",
    },
    {
      id: 14,
      name: "Jus d'Orange Frais",
      price: "40DH",
      description: "Pressé à la minute avec des oranges marocaines",
    },
    {
      id: 15,
      name: "Café aux Épices",
      price: "30DH",
      description: "Café aromatisé à la cannelle et au safran",
    },
    {
      id: 16,
      name: "Smoothie à l'Avocat",
      price: "50DH",
      description: "Boisson crémeuse à base d'avocat, lait et miel",
    },
    {
      id: 17,
      name: "Limonade à la Fleur d'Oranger",
      price: "40DH",
      description: "Limonade maison parfumée à la fleur d'oranger",
    },
    {
      id: 18,
      name: "Zerraq",
      price: "30DH",
      description: "Boisson rafraîchissante à base de lait fermenté",
    },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("food")

  return (
    <div className="container mx-auto px-4">
      <main className="min-h-screen py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>

        <div className="flex justify-center space-x-4 mb-8">
          {(["food", "sweet", "drinks"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${activeCategory === category ? "bg-orange-400 text-white" : "bg-gray-100"}`}
            >
              {category === "food"
                ? "Dishes"
                : category === "sweet"
                  ? "Desserts"
                  : "Drinks"}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems[activeCategory].map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-orange-400 font-bold mb-4">{item.price}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
