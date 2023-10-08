import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanetDetails from "../Pages/PlanetDetails";
import Timeline from "../Pages/timeline";
function Sun() {
  const data = {
    getImageSrc: () => require("../Video/sun.mp4"),
    description: `The Sun is a yellow dwarf star, a hot glowing ball of hydrogen and helium, at the center of our solar system. The Sun's gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. The sun is made of super-hot, electrically charged gas called plasma. The science of studying the Sun and its influence throughout the solar system is called heliophysics. 

      The Sun is located in the Milky Way galaxy in a spiral arm called the Orion Spur that extends outward from the Sagittarius arm. The Sun has several regions. The interior regions include the core, the radiative zone, and the convection zone. Moving outward, we have the visible surface or photosphere next, then the chromosphere, followed by the transition zone, and then the corona – the Sun’s expansive outer atmosphere.
      `,
  };
  const time = [
    {
      date: "APRIL 19, 1610",
      head: "Event One",
      para: "In a letter to Galileo, Johannes Kepler hypothesizes that the tails of comets are blown away by a “heavenly breeze” from the Sun",
    },
    {
      date: "1611-1613",
      head: "Event Two",
      para: "In 1611, Johann Goldsmid of Holland observed what might be spots on the Sun. The spots drifted across the Sun’s disk, suggesting that the Sun rotates.",
    },
    {
      date: "1802-1895",
      head: "Event Three",
      para: "It was observed that sunlight passing through a prism contains mysterious dark lines. Spectroscopy becomes a tool for determining the composition of distant light sources.",
    },
    {
      date: "MAY 29, 1919 ",
      head: "Event Four",
      para: "English astronomer Sir Arthur Eddington observes starlight bending around the Sun’s limb during a solar eclipse. The observations confirm a key prediction of Einstein’s theory of General Relativity.",
    },
    {
      date: "APRIL 17, 1976 ",
      head: "Event Five",
      para: "Helios mission becomes the closest spacecraft to the sun. It greatly improved our understanding of how the solar wind behaved before it reached Earth.",
    },
    {
      date: "OCTOBER 29, 2018",
      head: "Event Six",
      para: "Parker solar probe travels within 26.55 million miles of the Sun to become the closest spacecraft to the Sun.",
    },
    {
      date: "FEBRUARY 2020 ",
      head: "Event Seven",
      para: "The ESA/NASA Solar Orbiter mission launches  and acquires a top-down view of the Sun and captures the first-ever images of the Sun’s north and south poles. ",
    },
  ];
  const navStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
    display: "flex",
    justifyContent: "space-around",
  };

  const liStyle = {
    margin: "0 10px",
    transition: "color 0.3s", // Add a smooth transition for color change
  };
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const [showPlanetDetails, setShowPlanetDetails] = useState(true);

  const handleAboutClick = () => {
    setShowPlanetDetails(!showPlanetDetails);
    setShowTimeline(false);
  };

  const [showTimeline, setShowTimeline] = useState(false);

  const handleHistoryClick = () => {
    setShowTimeline(!showTimeline);
    setShowPlanetDetails(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link
              style={linkStyle}
              className="nav-link"
              onClick={handleAboutClick}
            >
              About
            </Link>
          </li>
          <li style={liStyle}>
            <Link
              style={linkStyle}
              onClick={handleHistoryClick}
              className="nav-link"
            >
              History Overview
            </Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showPlanetDetails && (
          <PlanetDetails img={data.getImageSrc()} des={data.description} />
        )}
        {showTimeline && <Timeline t={time} />}
      </div>
    </div>
  );
}

export default Sun;
