import React from "react";
import "./styles/style.scss";
import sliderInfo from "./exports/sliderInfo";
import images from "./exports/images";
import Slider from "./components/Slider";
import Nav from "./components/Navbar";






function App() {
  
  
// carousel



  return (
    <div className="App">
      <main>
        <div className="backdrop" id="bd"></div>
       <Nav />
        <img src={images.icons.logo} alt="logo" className="logo" />
    
        <Slider slides={ sliderInfo }/>

        <section className="about_sec">
          <img
            src={images.icons.dark}
            className="dark_img"
            alt="furnitures in a dark room"
          />
        <article className="as_info">
        <h3 className="h3_text">About our furniture</h3>

<p className="p_text p_text_sec">
  Our multifunctional collection blends design and function to suit
  your individual taste. Make each room unique, or pick a cohesive
  theme that best images.iconsress your interests and what inspires you. Find
  the furniture pieces you need, from traditional to contemporary
  styles or anything in between. Product specialists are available to
  help you create your dream space.
</p>
        </article>
          <img
            src={images.icons.light}
            className="light_img"
            alt="furnitures in a light room"
          />
        </section>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="https://erickfelix.netlify.app/">Efs0</a>.
      </div>
    </div>
  );
}

export default App;
