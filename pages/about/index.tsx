import React from "react"

export default function About() {
  return (
    <div className="background-image1 h-screen">
      <div className="bg-cover bg-center w-full h-full flex items-center justify-between gap-3">
        <div className="bg-white bg-opacity-50 p-6 rounded-lg w-2/6 h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-Gray-600 mb-6">
              THOR KITCHEN
            </h1>
          </div>
          <div className="flex pt-14 ">
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
        <div className="bg-white bg-opacity-50 p-6 rounded-lg w-2/6 h-full">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-Gray-600 mb-6">SERVICE</h1>
          </div>
          <div className="flex pt-14 ">
            <span className="text-wrap leading-relaxed bg-transparent text-center font-semibold">
              <strong>AT THOR KITCHEN</strong>, we strive to offer service that
              is as exceptional as our cuisine. Our team, dressed in uniforms
              that elegantly combine Moroccan and Nordic motifs, embodies the
              cultural fusion that defines our establishment. Our servers,
              trained in both Moroccan and Scandinavian hospitality traditions,
              will guide you through our menu with expertise and passion. Upon
              arrival, you will be greeted with Morocco's legendary warmth,
              perhaps with a glass of mint tea served in a unique Nordic style.
              Throughout your meal, our attentive staff will anticipate your
              needs, explaining the origin of each dish and suggesting food and
              wine pairings that perfectly marry the flavors of Morocco and the
              North. We pay particular attention to details, from the careful
              presentation of each dish to the perfect timing of service.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
