import React from "react"

const Thor2 = () => {
  const images = [
    { src: "img/pic1.jpg", alt: "Photo 1" },
    { src: "img/pic2.jpg", alt: "Photo 2" },
    { src: "img/pic3.jpg", alt: "Photo 3" },
    { src: "img/pic4.jpg", alt: "Photo 4" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="border p-2 overflow-hidden group">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ))}
    </div>
  )
}

export default Thor2
