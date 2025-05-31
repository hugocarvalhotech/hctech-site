import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useRef } from 'react'

interface PartnerCarouselProps {
  title: string;
  items: { image: string; name: string }[];
}

export const PartnerCarousel = ({ title, items }: PartnerCarouselProps) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1.5, spacing: 10 },
      },
    },
  })

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, idx) => (
          <div key={idx} className="keen-slider__slide flex justify-center items-center">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-32 h-32 object-contain p-2 border rounded-lg shadow-md bg-white"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
