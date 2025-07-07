
import React from "react";
import { useParams } from "react-router-dom";
import places from "../data/places";

function Place() {
  const { id } = useParams();
  const place = places.find((p) => p.id === parseInt(id));

  if (!place) return <div className="container">Plaats niet gevonden</div>;

  return (
    <div className="container">
      <h2>{place.name}</h2>
      <p>{place.description}</p>
      <a href={`https://maps.google.com/?q=${place.address}`} target="_blank" rel="noopener noreferrer">
        Bekijk op Google Maps
      </a>
    </div>
  );
}

export default Place;
