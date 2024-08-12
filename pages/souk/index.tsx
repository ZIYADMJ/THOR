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

          <div className="flex pt-14 ">
            <span className="text-wrap leading-relaxed bg-transparent text-center font-semibold">
              Bienvenue chez <strong>Thor Kitchen</strong>, un restaurant où
              chaque repas est une aventure divine. Situé au cœur de la ville,
              <strong>Thor Kitchen</strong> offre une ambiance chaleureuse et
              accueillante, inspirée des légendes nordiques. Les murs sont ornés
              de fresques représentant les mythes de Thor, le dieu du tonnerre,
              créant une atmosphère épique et invitante.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
