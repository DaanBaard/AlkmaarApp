
import React from "react";
import { useParams, Link } from "react-router-dom";
import places from "../data/places";

function Category() {
  const { tag } = useParams();
  const filtered = places.filter((p) => p.tags.includes(tag));

  return (
    <div className="container">
      <h2>{tag}</h2>
      <ul>
        {filtered.map((place) => (
          <li key={place.id}>
            <Link to={`/place/${place.id}`}>{place.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
