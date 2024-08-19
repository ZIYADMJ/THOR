import React from "react"
import Slider from "react-slick"
import Card from "../../components/Card"
import { posts } from "../../lib/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Food() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="bg-zinc-200 max-w-7xl w-full mx-auto shadow-lg rounded-lg overflow-hidden">
      <br />
      <div className="bg-cover bg-center w-full h-full flex items-center justify-center">
        <div className="bg-white bg-opacity-50 p-6 rounded-lg w-2/3 h-1/2">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Moroccan Foods
            </h1>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Traditional Moroccan food is a blend of Mediterranean, Arab, and
            Berber cuisines and is known for its rich flavors and use of spices.
            Some popular dishes include tagine, couscous, and pastilla. Moroccan
            food is often cooked slowly in a tagine, a clay pot with a conical
            lid that helps to retain moisture and flavor. The use of spices like
            cumin, coriander, and saffron is common in Moroccan cooking, and
            dishes are often sweet and savory, with a hint of spice. Mint tea is
            a popular drink in Morocco and is often served with meals or as a
            sign of hospitality. Moroccan food is a celebration of flavors and
            traditions, and is a must-try for anyone visiting the country.
          </p>
        </div>
      </div>
      <br />
      <div className="w-full ">
        <Slider {...settings}>
          {posts
            ?.filter((post) => post.type === "Food")
            .map((post) => (
              <div key={post.id} className="px-1">
                <Card
                  title={post.title}
                  imageUrl={post.imageUrl}
                  content={post.content}
                  webUrl={post.webUrl}
                  date={post.date}
                  author={post.author}
                />
              </div>
            ))}
        </Slider>
      </div>
      <br />
      <div className="bg-cover bg-center w-full h-full flex items-center justify-center">
        <div className="bg-white bg-opacity-50 p-6 rounded-lg w-2/3 h-1/2">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Moroccan Sweets
            </h1>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Moroccan sweets, or <strong>"Halwa"</strong>are a delectable part of
            Morocco's rich culinary heritage. These confections are more than
            just desserts; they are a blend of history, culture, and flavors
            that have been passed down through generations. Each sweet treat
            offers a unique taste experience, often enjoyed with the country’s
            iconic mint tea. Here are some of the most beloved Moroccan sweets
          </p>
        </div>
      </div>
      <br />
      <div className="w-full ">
        <Slider {...settings}>
          {posts
            ?.filter((post) => post.type === "Sweet")
            .map((post) => (
              <div key={post.id} className="px-1">
                <Card
                  title={post.title}
                  imageUrl={post.imageUrl}
                  content={post.content}
                  webUrl={post.webUrl}
                  date={post.date}
                  author={post.author}
                />
              </div>
            ))}
        </Slider>
      </div>
      <br />
      <div className="bg-cover bg-center w-full h-full flex items-center justify-center">
        <div className="bg-white bg-opacity-50 p-6 rounded-lg w-2/3 h-1/2">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Moroccan Drinks
            </h1>
          </div>
          <p className="text-gray-600 leading-relaxed">
            TMoroccan drinks are an integral part of the country's vibrant
            culinary tradition, offering a refreshing glimpse into its rich
            culture and history. These beverages are more than just drinks; they
            embody the essence of Moroccan hospitality and the art of flavor.
            From the soothing warmth of mint tea to the exotic allure of spiced
            coffee, each sip tells a story of tradition and celebration. Here
            are some of the most cherished Moroccan drinks that are enjoyed by
            locals and visitors alike.
          </p>
        </div>
      </div>
      <br />
      <div className="w-full ">
        <Slider {...settings}>
          {posts
            ?.filter((post) => post.type === "Drink")
            .map((post) => (
              <div key={post.id} className="px-1">
                <Card
                  title={post.title}
                  imageUrl={post.imageUrl}
                  content={post.content}
                  webUrl={post.webUrl}
                  date={post.date}
                  author={post.author}
                />
              </div>
            ))}
        </Slider>
        <br />
      </div>
    </div>
  )
}
