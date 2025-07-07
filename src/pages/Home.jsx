
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import alkmaarImage from "../assets/alkmaar.jpg";

const tags = ["eten", "drinken", "cultuur", "vaenw"];

function Home() {
  return (
    <div className="container">
      <img src={alkmaarImage} alt="Alkmaar" />
      <h1>Een alternatieve gids door Alkmaar</h1>
      <div style={{ textAlign: "center" }}>
        {tags.map((tag) => (
          <Link to={`/category/${tag}`} key={tag}>
            <button>{tag}</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
