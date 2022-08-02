import React, { useState } from "react";
import sliderInfo from "../exports/sliderInfo";
import images from "../exports/images";

const Slider = ({ slides }) => {

  const [ current, setCurrent ] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

// myComponent re-renders the page!
  function MyComponent() {
    const [dimensions, setDimensions] = React.useState({ 
        width: window.innerWidth
      })
  
    React.useEffect(() => {
        function handleResize() {
        setDimensions({
          width: window.innerWidth
        })
    }
      window.addEventListener('resize', handleResize)
      
      return _ => {
        window.removeEventListener('resize', handleResize)
      }
      
  })
    }
  MyComponent()

  return (
    <div className="slide_container">
      <section className="arrows">
        <img 
        src={images.icons.angLeft} 
        alt="arrL" className="angleL" 
        onClick={prevSlide}
        />
        
        <img
          src={images.icons.angRight}
          alt="arrR"
          className="angleR"
          onClick={nextSlide}
        />
      </section>
      {sliderInfo.map((e, index) => {
        return (
            <div className={index === current ? 'slide slide_active' : 'slide'} key={index}>
         
            <img src={window.innerWidth <= 420 ? e.img : e.dstp_img} alt="furniture" id='furn'/>
         <div className="slide_info">
         <h2 className="h2_text">{e.title}</h2>
          <p className="p_text">{e.info}</p>
          <p className="shop">
            Shop now <img src={images.icons.arrow} alt="arrow" />
          </p>
         </div>
        </div>
        )
      })}
    </div>
  );
};

export default Slider;
