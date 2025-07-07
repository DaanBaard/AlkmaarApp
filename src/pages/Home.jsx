
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import alkmaarImage from "../assets/alkmaar.jpg";

const tags = ["eten", "drinken", "cultuur", "vaenw"];

function Home() {
  return (
    <div className="home">
      <img src={alkmaarImage} alt="Alkmaar" className="hero-image" />
      <h1>Een alternatieve gids door Alkmaar</h1>
      <p className="intro-text">
        Ontdek unieke plekken om te eten, drinken, beleven en verdwalen in Alkmaar.
      </p>
      <div className="tag-buttons">
        {tags.map((tag) => (
          <Link to={`/category/${tag}`} key={tag}>
            <button className="tag-btn">{tag}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
