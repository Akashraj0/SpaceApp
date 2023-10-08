import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanetDetails from "../Pages/PlanetDetails";
import Timeline from "../Pages/timeline";
function Venus() {
  const data = {
    getImageSrc: () => require("../Video/venus.mp4"),
    description: `Venus is the second planet from the Sun in our solar system, and it is often referred to as Earth's sister planet due to its similar size and mass. However, despite these similarities, Venus has a very different atmosphere and surface conditions.The thick atmosphere creates a strong greenhouse effect, trapping heat and making Venus the hottest planet in our solar system.The surface of Venus is rocky and has numerous volcanoes, mountains, and highland regions. Unlike many other planets in our solar system, Venus does not have any natural satellites (moons).Several spacecraft have been sent to study Venus, including the Soviet Union's Venera program and NASA's Magellan mission. More recent missions, such as the European Space Agency's Venus Express, have also provided valuable data.Some scientists believe that Venus may have had liquid water on its surface in the distant past, and its current extreme conditions are the result of a runaway greenhouse effect.`,
  };
  const time = [
    {
      date: "Second millennium BCE",
      para: "Venus has been often referred to as the Evening Star when visible after sunset and the Morning Star when visible before sunrise. Babylonian astronomers recorded these observations of Venus initially.",
    },
    {
      date: "2nd century AD",
      para: `Ancient astronomers like Claudius Ptolemy attempted to explain the irregular motion of Venus within the framework of geocentric models.`,
    },
    {
      date: "16th century",
      para: "The heliocentric model proposed by Nicolaus Copernicus provided a new perspective on Venus as it orbited the Sun.",
    },
    {
      date: "17th century",
      para: `Johannes Kepler's laws of planetary motion, helped explain the elliptical orbits of planets, including Venus, around the Sun.`,
    },
    {
      date: "1989 ",
      para: "NASA's Magellan spacecraft, launched in 1989, used radar mapping to provide detailed images of Venus's surface, despite the thick clouds that obscured visible light observations.",
    },
    {
      date: "2005",
      para: "The European Space Agency's Venus Express studied Venus's atmosphere and climate.",
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

export default Venus;
