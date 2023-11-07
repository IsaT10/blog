import { useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { useKeenSlider } from 'keen-slider/react';

const ReviwerSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return <div></div>;
};

export default ReviwerSection;
