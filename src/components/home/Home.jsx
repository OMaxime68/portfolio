import React from 'react';
import "./home.css";
import Me from "../../assets/me-1.jpeg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img className="home__img" src={Me} alt="Maxime Owaller" />
        <h1 className="home__name">Maxime Owaller</h1>
        <span className="home__education">5th year student at Epitech Paris<br></br>Full Stack Developer at Lasa<br></br>Freelance Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home