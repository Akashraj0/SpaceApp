import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanetDetails from "../Pages/PlanetDetails";
import Timeline from "../Pages/timeline";
function Uranus() {
  const data = {
    getImageSrc: () => require("../Video/uranus.mp4"),
    description: `Uranus is very cold and windy. It is surrounded by faint rings and more than two dozen small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.


      Uranus is blue-green in color due to large amounts of methane, which absorbs red light but allows blues to be reflected back into space. The atmosphere is mostly hydrogen and helium, but also includes large amounts of water, ammonia and methane.
      `,
  };
  const time = [
    {
      date: "JAN 1, 1600",
      para: "Early in the history of the planet, scientists believe Uranus was hit by something causing it to change its rotation.",
    },
    {
      date: "SEP 11, 1690",
      para: "It was first recorded as a star instead of a planet.",
    },
    {
      date: "MAR 13, 1781",
      para: "William Herschel (1738-1822) first recognized it as a comet, but then found it to be a planet.",
    },
    {
      date: "MAR 10, 1977",
      para: "Scientists discover that Uranus has a ring system.",
    },
    {
      date: "JAN 17, 1986",
      para: "Voyager 2 flew by Uranus in 1986 and detected a magnetic field 50 times stronger than earth’s.",
    },
    {
      date: "DEC 22, 2005",
      para: "The Hubble Telescope discovered 2 previously unknown rings of Uranus.",
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

export default Uranus;
