import React from "react"

export default function SoukDor() {
  return (
    <div className="background-image h-screen">
      <div className="bg-cover bg-center w-full h-full flex items-center justify-center">
        <div className="bg-white bg-opacity-50 p-6 rounded-lg w-2/3 h-1/2">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-Gray-600 mb-6">
              THOR KITCHEN
            </h1>
          </div>

          <div className="flex pt-15 ">
            <span className="text-wrap leading-relaxed bg-transparent text-center font-semibold">
              <strong>THOR KITCHEN</strong> welcomes you to a universe where the
              richness of Moroccan cuisine meets Nordic epic. Located in the
              heart of the medina, our restaurant offers a unique culinary
              experience that skillfully blends traditional Moroccan flavors
              with a bold Scandinavian touch. In a setting that combines
              Moroccan zellige tilework and Nordic motifs, our talented chef
              revisits classics such as tajine and couscous, adding surprising
              Nordic ingredients. Savor our specialty, the "Thor's Tajine," a
              savory mix of lamb, prunes, and spices, enhanced with a touch of
              Nordic berries. Whether for a family meal or a romantic dinner,{" "}
              <strong>THOR KITCHEN</strong>
              promises an unforgettable gastronomic journey between Morocco and
              the Northern lands.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
