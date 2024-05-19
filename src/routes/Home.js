import React from "react";
import "./Home.css";
import AboutImg from "../assets/parrots.png";
import AboutImg2 from "../assets/fam.png";
import AboutImg3 from "../assets/flag.png";
import AboutImg4 from "../assets/water.png";
import AboutImg5 from "../assets/miami.png";
import AboutImg6 from "../assets/biryani.png";
function Home() {
  return (
    <div className="home">
      <h1 className="portfolio-title">Welcome to my Portfolio Page!</h1>
      <section className="portfolio">
        <div className="portfolio-item">
          <div className="image-text-container">
            <img src={AboutImg} alt="me" />
            <p>This is me at West Palm Beach in Aruba with some parrots.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image-text-container">
            <img src={AboutImg2} alt="me" />
            <p>This image includes my brother and I, along with my friends I grew up with on our cruise vacation trip.</p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image-text-container">
            <img src={AboutImg3} alt="me" />
            <p>
            I am of Pakistani descent, belonging to the South Asian ethnicity. Here is what the Pakistani flag looks like.
            </p>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="portfolio-item">
          <div className="image-text-container">
            <img src={AboutImg4} alt="me" />
            <p>
            Here is a view of the sea during the sunset from a boat during my recent trip to Barcelona, Spain.
            </p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image-text-container">
            <img src={AboutImg5} alt="me" />
            <p>
            This view showcases the sunset with a cityscape from a boat in another recent trip to Miami, Florida.
            </p>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image-text-container">
            <img src={AboutImg6} alt="me" />
            <p>
              The food above is a mixed rice dish that was thought to have originated from Iran before settling in modern India. It is called Biryani. It is made with rice, some type of meat and spices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
