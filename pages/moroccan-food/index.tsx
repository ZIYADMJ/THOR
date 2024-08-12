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
    <div className="bg-zinc-100 max-w-7xl w-full mx-auto shadow-lg rounded-lg overflow-hidden">
      <div className="bg-cover bg-center w-full h-full flex items-center justify-center">
        <div className="bg-white bg-opacity-50 p-6 rounded-lg w-2/3 h-1/2">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Moroccan Food
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
    </div>
  )
}
