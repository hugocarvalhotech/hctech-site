import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface CarouselProps {
  images?: string[];
}

const Carousel = ({ images = [] }: CarouselProps) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 3, spacing: 15 },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(max-width: 480px)': {
        slides: { perView: 1, spacing: 5 },
      },
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((img, index) => (
        <div key={index} className="keen-slider__slide flex justify-center items-center">
          <img
            src={img}
            alt={`Slide ${index}`}
            className="h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
