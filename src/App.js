import { NavBar, Ulist } from "./styles/stylesApp.js";
import "./styles/style.css";
import arrow from "./images/icon-arrow.svg";
import close from "./images/icon-close.svg";
import ham from "./images/icon-hamburger.svg";
import logo from "./images/logo.svg";
// import dsktp_img_1 from "./images/dsktp-img-hero-1.jpg";
// import dsktp_img_2 from "./images/dsktp-img-hero-2.jpg";
// import dsktp_img_3 from "./images/dsktp-img-hero-3.jpg";
import mb_img_1 from "./images/mb-img-hero-1.jpg";
import mb_img_2 from "./images/mb-img-hero-2.jpg";
import mb_img_3 from "./images/mb-img-hero-3.jpg";
import dark from "./images/image-about-dark.jpg";
import light from "./images/image-about-light.jpg";
import angRight from "./images/icon-angle-right.svg";
import angLeft from "./images/icon-angle-left.svg";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar>
          <img src={ham} alt="arrow" className="menu" />
          <img src={close} alt="X" className="close" />
          <Ulist>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </Ulist>
        </NavBar>
        <img src={logo} alt="logo" className="logo" />
        <section className="arrows">
          <img src={angLeft} alt="arrL" className="angleL" />
          <img src={angRight} alt="arrR" className="angleR" />
        </section>

        <div className="slide slide_one">
          <img src={mb_img_1} alt="furniture" className="furn" />

          <h2 className="h2_text">Discover innovative ways to decorate</h2>

          <p className="p_text">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>

          <p className="shop">
            Shop now <img src={arrow} alt="arrow" />
          </p>
        </div>

        <div className="slide slide_two">
          <img src={mb_img_2} alt="furniture" className="furn" />

          <h2 className="h2_text">We are available all across the globe</h2>
          <p className="p_text">
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
          </p>

          <p className="shop">
            Shop now <img src={arrow} alt="rightarrow" />
          </p>
        </div>

        <div className="slide slide_three">
          <img src={mb_img_3} alt="furniture" className="furn" />

          <h2 className="h2_text">Manufactured with the best materials</h2>
          <p className="p_text">
            Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.
          </p>
          <p className="shop">
            Shop now <img src={arrow} alt="rightarrow" />
          </p>
        </div>

        <section className="about_sec">
          <img
            src={dark}
            className="dark_img"
            alt="furnitures in a dark room"
          />
          <h3 className="h3_text">About our furniture</h3>

          <p className="p_text p_text_sec">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
          <img
            src={light}
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
