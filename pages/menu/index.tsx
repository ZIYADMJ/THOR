import Head from "next/head"
import { useState } from "react"
import Image from "next/image"

type MenuItem = {
  id: number
  name: string
  price: string
  description: string
  imageUrl: string
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
      imageUrl: "/img/tajine-poulet.jpeg",
    },
    {
      id: 2,
      name: "Tajine de Poulet aux Olives",
      price: "160DH",
      description: "Poulet mijoté avec des olives et citrons confits",
      imageUrl: "/img/tajine-poulet.jpeg",
    },
    {
      id: 3,
      name: "Tajine de Poulet aux Olives",
      price: "160DH",
      description: "Poulet mijoté avec des olives et citrons confits",
      imageUrl: "/img/tajine-poulet.jpeg",
    },
    // ... other food items
  ],
  sweet: [
    {
      id: 1,
      name: "Corne de Gazelle",
      price: "50DH",
      description: "Pâtisserie en forme de croissant fourrée aux amandes",
      imageUrl: "/img/kaab-el-ghzal.jpg",
    },
    {
      id: 2,
      name: "Corne de Gazelle",
      price: "50DH",
      description: "Pâtisserie en forme de croissant fourrée aux amandes",
      imageUrl: "/img/kaab-el-ghzal.jpg",
    },
    {
      id: 3,
      name: "Corne de Gazelle",
      price: "50DH",
      description: "Pâtisserie en forme de croissant fourrée aux amandes",
      imageUrl: "/img/kaab-el-ghzal.jpg",
    },
  ],
  drinks: [
    {
      id: 1,
      name: "Thé à la Menthe",
      price: "30DH",
      description: "Thé vert avec menthe fraîche et sucre",
      imageUrl: "/img/tea.jpg",
    },
    {
      id: 2,
      name: "Thé à la Menthe",
      price: "30DH",
      description: "Thé vert avec menthe fraîche et sucre",
      imageUrl: "/img/tea.jpg",
    },
    {
      id: 3,
      name: "Thé à la Menthe",
      price: "30DH",
      description: "Thé vert avec menthe fraîche et sucre",
      imageUrl: "/img/tea.jpg",
    },
    // ... other drink items
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("food")

  return (
    <div className="container mx-auto px-4 bg-zinc-50 rounded-3xl">
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
              <div className="mb-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
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
