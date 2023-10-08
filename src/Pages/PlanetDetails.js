import React from "react";

function PlanetDetails({ img, des }) {
  const planetDetailsStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "3rem",
  };
  const planetDescriptionStyle = {
    fontSize: "16px",
    width: "50%",
    color: "white",
    marginTop: "2rem",
    marginBottom: "4rem",
    textAlign: "Justify",
  };

  return (
    <div style={planetDetailsStyle}>
      <video width="750" height="500" controls>
        <source src={img} type="video/mp4" />
      </video>
      <p style={planetDescriptionStyle}>{des}</p>
    </div>
  );
}

export default PlanetDetails;
