import { type } from "os"

export const posts = [
  {
    id: 1,
    title: "COUSCOUS",
    type: "Food",
    content:
      "Couscous is a traditional Moroccan dish made from steamed semolina wheat granules. It is typically served with a flavorful stew of meat (like lamb or chicken), vegetables (such as carrots, zucchini, and pumpkin), and aromatic spices including cumin, coriander, and saffron. Often garnished with chickpeas and sometimes dried fruits or nuts, couscous is a staple of Moroccan cuisine and is commonly enjoyed during family gatherings and celebrations.",
    imageUrl: "/img/couscous.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Couscous",
    date: "2022-01-01T00:00:00.000Z",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Kamar",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 2,
    title: "KEBAB",
    type: "Food",
    content:
      "Moroccan kebab, known as brochettes, consists of marinated meat, typically lamb, beef, or chicken, skewered and grilled to perfection. The marinade often includes a blend of spices like cumin, paprika, and coriander, along with garlic and olive oil. These flavorful and juicy skewers are a popular street food and are also enjoyed at family gatherings and celebrations.",
    imageUrl: "/img/kebeb.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Kebab",
    date: "Jun 1, 2020",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Zineb",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 3,
    title: "TAJINE POULET",
    type: "Food",
    content:
      "Tajine Poulet is a traditional Moroccan dish made with chicken slow-cooked in a conical clay pot called a tajine. The chicken is typically simmered with a blend of aromatic spices, olives, preserved lemons, and vegetables, creating a tender, flavorful meal. This dish is known for its rich, savory sauce and is often enjoyed with couscous or bread.",
    imageUrl: "/img/Tajine-poulet.jpeg",
    webUrl:
      "https://www.cuisineaz.com/recettes/tajine-de-poulet-aux-epices-5468.aspx",
    date: "Jun 1, 2020",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Khadija",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 4,
    title: "TANJIYA",
    type: "Food",
    content:
      "Tanjiya is a traditional Moroccan dish from Marrakech, made by slow-cooking seasoned meat, usually lamb or beef, in an earthenware pot. The meat is typically marinated with a mix of spices like cumin, saffron, garlic, and preserved lemon, and then cooked in hot ashes for several hours until it becomes tender and flavorful. This dish is often enjoyed during special occasions and communal gatherings.",
    imageUrl: "/img/tanjiya.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Tangia",
    date: "Jun 1, 2020",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Moha",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 5,
    title: "CHEBAKIA",
    type: "Sweet",
    content:
      "Chebakia is a traditional Moroccan sweet, often enjoyed during Ramadan. This delightful treat is made by shaping dough into intricate flower-like patterns, then frying until golden and crisp. The fried pastries are immediately soaked in honey and sprinkled with sesame seeds, resulting in a rich, sweet, and slightly spicy flavor. Chebakia's unique texture and taste make it a favorite during special occasions and festive celebrations.",
    imageUrl: "/img/chebakiya.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Chebakia",
    date: "Aug 5, 2024",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Amine",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 6,
    title: "MESKOUTA",
    type: "Sweet",
    content:
      "Meskouta is a classic Moroccan sponge cake, often flavored with citrus like orange or lemon. This light and airy cake is typically enjoyed with mint tea and is a staple in Moroccan households. It's easy to make and can be served plain or with a dusting of powdered sugar, making it a versatile dessert for any occasion.",
    imageUrl: "/img/meskouta.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Meskouta",
    date: "Aug 5, 2024",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Amina",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 7,
    title: "GHRIBA",
    type: "Sweet",
    content:
      "Ghriba are traditional Moroccan cookies, known for their crumbly texture and unique flavor. Made with ingredients like almonds, sesame seeds, or coconut, these cookies are often flavored with a hint of cinnamon or anise. Ghriba are perfect for serving with tea and are a popular choice for festive occasions and family gatherings.",
    imageUrl: "/img/ghriba.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Ghriba",
    date: "Aug 5, 2024",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Hassan",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 8,
    title: "SELLOU",
    type: "Sweet",
    content:
      "Sellou, also known as Sfouf, is a traditional Moroccan sweet made from roasted flour, almonds, sesame seeds, and honey. This nutrient-dense treat is typically prepared during Ramadan and special celebrations. Sellou is known for its rich, nutty flavor and its ability to provide energy, making it a favorite among Moroccans during fasting periods.",
    imageUrl: "/img/sellou.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Sellou",
    date: "Aug 5, 2024",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Youssef",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 9,
    title: "KAAB EL GHAZAL",
    type: "Sweet",
    content:
      "Kaab el Ghazal, also known as Gazelle Horns, are delicate Moroccan pastries filled with almond paste and flavored with orange blossom water. These crescent-shaped treats are often served at weddings and special occasions. Their light, flaky exterior and fragrant filling make them a beloved dessert in Moroccan cuisine.",
    imageUrl: "/img/kaab-el-ghzal.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Kaab_el_Ghazal",
    date: "Aug 5, 2024",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Fatima",
      avatar: "/img/chef.png",
    },
  },
  {
    id: 10,
    title: "BRIOUAT",
    type: "Sweet",
    content:
      "Briouat are Moroccan pastries filled with a variety of sweet or savory fillings. The sweet version typically includes almond paste, flavored with cinnamon and orange blossom water, wrapped in thin pastry dough, and fried until golden. These bite-sized delights are often coated in honey and sprinkled with sesame seeds, making them a favorite during festive occasions.",
    imageUrl: "/img/briwat.jpg",
    webUrl: "https://en.wikipedia.org/wiki/Briouat",
    date: "Aug 5, 2024",
    category: "Cuisine marocaine",
    author: {
      name: "Chef Karim",
      avatar: "/img/chef.png",
    },
  },
]
