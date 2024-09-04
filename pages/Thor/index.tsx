import React from "react"
import SoukDor from "../souk"
import Food from "../moroccan-food"

const HomePage = () => {
  const images = [
    { src: "img/pic1.jpg", alt: "Photo 1" },
    { src: "img/pic2.jpg", alt: "Photo 2" },
    { src: "img/pic3.jpg", alt: "Photo 3" },
    { src: "img/pic4.jpg", alt: "Photo 4" },
  ]
  return (
    <div>
      <div>
        <SoukDor />
      </div>
      <br />
      <Food />
    </div>
  )
}

export default HomePage
