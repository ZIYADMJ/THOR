import React from "react"
import Slider from "react-slick"
import Card from "../../components/Card"
import { posts } from "../../lib/data"

export default function Sweet() {
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
    <div className="max-w-6xl w-full mx-auto shadow-lg rounded-lg overflow-hidden">
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
      <div className="w-full">
        <Slider {...settings}>
          {posts
            ?.filter((post) => post.type === "Sweet")
            .map((post) => (
              <Card
                key={post.id}
                title={post.title}
                imageUrl={post.imageUrl}
                content={post.content}
                webUrl={post.webUrl}
                date={post.date}
                author={post.author}
              />
            ))}
        </Slider>
      </div>
    </div>
  )
}
