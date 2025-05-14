"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function ArtGallery() {
  const [selectedFrame, setSelectedFrame] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Array of 9 frames with placeholder images and detailed information
  const techniques = ["Óleo sobre lienzo", "Acuarela sobre papel", "Acrílico sobre tabla", "Técnica mixta"]
  const styles = ["Impresionismo", "Expresionismo", "Cubismo", "Surrealismo", "Realismo"]
  const titles = [
    "Shiro Money",
    "Monashiro",
    "The Tabi Angel",
    "Shiro Kaws",
    "Shiro in the Temple",
    "Shiros Abduction",
    "Twins in the Sky",
    "A Good Arepa",
    "Money Rain",
  ]
  const artists = [
    "Leonardoshiro da Money",
    "Da Shiro Vinci",
    "Astroshiromoto",
    "Michelanshiro",
    "Inkashiro el Místico",
    "Shiron Spielberg",
    "Aeroshiro Bros",
    "Shirobeto del Sabor",
    "Bankshiro",
  ]

  const images = [
    "/shirom.png",
    "/shironci.png",
    "/tabiangel.png",
    "/myshiro.png",
    "/shirotemple.png",
    "/shiroufos.png",
    "/twins.png",
    "/shiroeating.png",
    "/realshiro.png",
  ]

  const descriptions = [
    [
      "A mysterious Shiro character poses with a serious expression, holding a stack of cash like a secretive banker. The dark Renaissance-style background and dramatic lighting give it the aura of a timeless portrait with a modern twist.",
    ],
    [
      "A playful reinterpretation of the Mona Lisa featuring a quirky Shiro figure, lying on its stomach with a serene yet mischievous look. This parody blends classical art with cartoonish charm.",
    ],
    [
      "Dressed in a detailed space suit, this version of Shiro looks ready for an interstellar mission. The sketch-style artwork mimics engineering blueprints, mixing science fiction with artistic whimsy.",
    ],
    [
      "A celestial Tabi angel stands centered in the frame, sculpted in hyperrealistic weathered marble with veins of ethereal blue light running through its cracked surface. Bathed in dramatic chiaroscuro lighting, the figure glows subtly with a divine golden aura while deep violet shadows add a mysterious, almost sacred atmosphere. The angel’s wings are outstretched mid-transcendence, and its expression is one of awakening power. Light shafts and mist filter through the cracked fresco walls of a grand cathedral, giving the entire composition a holy yet darkly epic tone — both ancient and otherworldly.",
    ],
    [
      "A highly detailed anatomical designer figure of Shiro stands at the center of a pristine white museum backdrop. Rendered with museum-grade precision, the outer body is sculpted in smooth matte vinyl, faithfully preserving Shiro's original skin tone, hair style, and clothing colors from the reference image. The left side of the figure is cut away to reveal vibrant, semi-gloss internal anatomy — from the pink brain to red organs and beige stomach — contrasting beautifully with the soft-touch exterior.",
    ],
    [
      "In a classic black-and-white sci-fi style, this scene shows Shiro being abducted by a UFO, with light beams and floating furniture. It’s a dramatic, humorous take on alien encounters.",
    ],
    [
      "Two Shiro characters parachute through a bright blue sky, side by side like synchronized acrobats. Their expressions and matching gear add to the charm of this surreal aerial adventure.",
    ],
    [
      "Shiro savors a big arepa with a content face, enjoying a moment of peace and indulgence. This portrait captures a slice of everyday happiness, mixing Venezuelan food culture with cartoon humor.",
    ],
    [
      "With a sly grin and a TABI-branded bar in hand, Shiro is surrounded by flying dollar bills. This image suggests wealth, marketing, or mischief—maybe all three—in a flashy, modern scene.",
    ],
  ]

  const frames = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    title: titles[i],
    artist: artists[i],
    year: `${1800 + i * 20}`,
    technique: techniques[i % techniques.length],
    style: styles[i % styles.length],
    placeholder: images[i],
    description: descriptions[i], // ahora es un array de strings
  }))

  const handleFrameClick = (id: number) => {
    setSelectedFrame(id)
  }

  const closeExpandedView = () => {
    setSelectedFrame(null)
  }

  return (
    <main
      className="min-h-screen bg-museum-wall text-[#333333] relative overflow-hidden"
      style={{
        backgroundImage: "url('/wall-texture.png')",
        backgroundRepeat: "repeat",
      }}
    >
      {/* Museum Header - Logo added */}
      <header className="py-6 border-b border-[#e0d9d0] relative">
        {/* Logo arriba a la izquierda */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-[40px] flex items-center">
          <Image
            src="/tabilogo.png"
            alt="TABI Logo"
            width={865}
            height={288}
            className="w-[120px] h-auto"
            priority={false}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-serif tracking-wide">TABI ART MUSEUM</h1>
          <p className="mt-1 text-[#666666] italic">TOP 9 MONTHLY ARTWORKS</p>
        </div>
      </header>

      {/* Gallery Wall */}
      <section
        className="max-w-7xl mx-auto py-16 px-4 relative"
        style={{
          transform: `rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * -2}deg)`,
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        {/* Museum lighting effect */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative">
          {frames.map((frame) => (
            <div
              key={frame.id}
              className="relative cursor-pointer transition-all duration-300 group"
              onClick={() => handleFrameClick(frame.id)}
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(0px)",
                cursor: "pointer",
              }}
            >
              {/* Frame */}
              <div className="border-[20px] border-[#FFBF00] bg-white relative overflow-hidden w-full h-full pointer-events-auto shadow-lg">
                <div className="aspect-[3/4] relative w-full h-full pointer-events-auto">
                  <Image
                    src={frame.placeholder || "/placeholder.svg"}
                    alt={`Frame ${frame.id + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Artwork lighting effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay pointer-events-none"
                    style={{
                      transform: `rotate(${mousePosition.x * 5}deg)`,
                    }}
                  ></div>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <h3 className="font-serif text-lg">{frame.title}</h3>
                  <p className="text-sm text-[#666666]">
                    {frame.artist}, {frame.year}
                  </p>
                </div>
              </div>

              {/* Museum label - ahora clickeable */}
              <div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#f5f2eb] px-3 py-1 text-xs border border-[#e0d9d0] shadow-sm text-center w-3/4 font-serif cursor-pointer pointer-events-auto"
                style={{
                  transform: "translateX(-50%) translateZ(5px)",
                }}
                onClick={() => handleFrameClick(frame.id)}
              >
                {frame.title}
              </div>
            </div>
          ))}
        </div>

        {/* Security barrier */}
        <div className="relative mt-16 mx-auto max-w-5xl" style={{ zIndex: 0 }}>
          {/* Elegant stanchions */}
          <div className="flex justify-between items-center">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="relative flex flex-col items-center">
                {/* Decorative top element */}
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-b from-[#FFD700] to-[#DAA520] relative ${i === 2 ? "z-0" : "z-10"} shadow-md`}
                >
                  <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#FFF8DC] to-[#FFD700]"></div>
                </div>

                {/* Elegant pole */}
                <div className="w-3 h-24 bg-gradient-to-b from-[#3A3A3A] to-[#1A1A1A] rounded-full relative">
                  {/* Decorative ring near top */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-5 h-1.5 bg-[#B8860B] rounded-full"></div>

                  {/* Decorative ring near bottom */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-5 h-1.5 bg-[#B8860B] rounded-full"></div>
                </div>

                {/* Base with metallic finish */}
                <div className="w-14 h-3 bg-gradient-to-b from-[#3A3A3A] to-[#1A1A1A] rounded-full relative">
                  <div className="absolute inset-x-1 top-0.5 h-1 bg-gradient-to-r from-[#555555] via-[#AAAAAA] to-[#555555] rounded-full"></div>
                </div>
                <div className="w-18 h-2 bg-gradient-to-b from-[#3A3A3A] to-[#1A1A1A] rounded-full mt-0.5 relative">
                  <div className="absolute inset-x-2 top-0.5 h-0.5 bg-gradient-to-r from-[#555555] via-[#AAAAAA] to-[#555555] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Velvet rope with improved appearance */}
          <div className="absolute top-10 left-0 right-0">
            <div className="h-2.5 bg-gradient-to-b from-[#A50021] to-[#800000] rounded-full transform -translate-y-1/2 shadow-[0_0_5px_rgba(0,0,0,0.3)]"></div>
            <div className="h-1 bg-gradient-to-b from-[#FF9999] to-transparent rounded-full transform -translate-y-1/2 opacity-30 blur-[1px]"></div>
          </div>

          {/* Warning sign with improved styling */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#FFFFFF] to-[#F5F5F5] px-5 py-2 border border-[#e0d9d0] shadow-md text-xs text-center font-medium rounded-md rotate-[-1deg] z-20">
            <span className="text-[#8B0000] font-serif">Por favor no tocar las obras</span>
            <span className="mx-2 text-[#AAAAAA]">•</span>
            <span className="text-[#333333] font-serif">Please do not touch the artwork</span>
          </div>
        </div>
      </section>

      {/* Expanded View Modal - Improved image display */}
      {selectedFrame !== null && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-10"
          onClick={closeExpandedView}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeExpandedView}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors"
            >
              <X className="w-6 h-6 text-white md:text-gray-700" />
            </button>

            {/* Left side - Artwork - Improved to take more space */}
            <div
              className="w-full md:w-3/5 transition-all duration-500 ease-in-out"
              style={{
                transform: selectedFrame !== null ? "translateX(0)" : "translateX(-100px)",
                opacity: selectedFrame !== null ? 1 : 0,
              }}
            >
              <div
                className="border-[20px] border-[#FFBF00] bg-white relative h-full"
                style={{
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.1)",
                }}
              >
                <div className="aspect-[3/4] relative h-full w-full flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={frames[selectedFrame].placeholder || "/placeholder.svg"}
                      alt={`Expanded view of ${frames[selectedFrame].title}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                  </div>

                  {/* Lighting effect on expanded artwork */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay"></div>
                </div>
              </div>
            </div>

            {/* Right side - Details - Ajustado para solo mostrar título, artista y descripción */}
            <div
              className="w-full md:w-2/5 p-8 bg-[#f8f5f0] flex flex-col justify-between transition-all duration-500 ease-in-out"
              style={{
                transform: selectedFrame !== null ? "translateX(0)" : "translateX(100px)",
                opacity: selectedFrame !== null ? 1 : 0,
              }}
            >
              <div>
                <h2 className="font-serif text-3xl mb-2">{frames[selectedFrame].title}</h2>
                <p className="text-[#666666] text-xl mb-6 font-serif italic">
                  {frames[selectedFrame].artist}, {frames[selectedFrame].year}
                </p>

                <div className="space-y-4">
                  {frames[selectedFrame].description.map((text, idx) => (
                    <p key={idx} className="text-[#333333] leading-relaxed">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Museum Footer - Logo removed */}
      <footer className="py-6 border-t border-[#e0d9d0] mt-10 relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative">
          <p className="text-[#666666] mb-2 md:mb-0 z-10">© {new Date().getFullYear()} TABI Art Museum</p>
          <p className="text-[#666666] text-sm z-10">All Rights Reserved • Created by Samx 💢</p>
          {/* Grupo de imágenes absolutamente centrado y cada una manipulable */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[85%] pointer-events-none z-0 w-[300px] h-[100px]">
            {/* Shiro Izquierda */}
            <div className="absolute top-1/2 left-0 -translate-y-[75%] -translate-x-[60%]">
              <Image
                src="/shiroiz.png"
                alt="Shiro Izquierda"
                width={200}
                height={200}
                className="w-[160px] h-[250px]"
                priority={false}
              />
            </div>
            {/* Shiro Centro */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[75%]">
              <Image
                src="/shiro.png"
                alt="Shiro"
                width={200}
                height={200}
                className="w-[220px] h-[250px]"
                priority={false}
              />
            </div>
            {/* Shiro Derecha */}
            <div
              className="absolute top-1/2 right-0 -translate-y-[75%] translate-x-[60%]"
            >
              <Image
                src="/shiroder.png"
                alt="Shiro Derecha"
                width={200}
                height={200}
                className="w-[160px] h-[250px]"
                priority={false}
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}