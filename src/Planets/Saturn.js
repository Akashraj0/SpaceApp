import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanetDetails from "../Pages/PlanetDetails";
import Timeline from "../Pages/timeline";
function Saturn() {
  const data = {
    getImageSrc: () => require("../Video/saturn.mp4"),
    description: `The butterscotch-colored, ringed Saturn is the sixth planet from the sun and the second largest in the Solar System, smaller only than Jupiter. It has an equatorial diameter of 119,300 kilometers (74,130 miles), and its volume would enclose 750 Earths! The mass of Saturn is 95 times the mass of Earth. However, Saturn's gravity is only 1.08 times the gravity on Earth because Saturn is such a large planet. An object weighing 100 lbs on Earth would weigh 108 lbs on Saturn.
      Saturn is less dense than water. If there were a body of water large enough to hold Saturn, it would float! No other planet in the Solar System has this property.
      Saturn is called a "gaseous giant" because its atmosphere is comprised of hydrogen (94%) and helium (6%). Unlike Earth, Saturn does not have a surface on which a spacecraft could land. A spacecraft descending through the clouds of Saturn would encounter gases becoming hotter and denser until finally the spacecraft would be crushed and melted.
      `,
  };
  const time = [
    {
      date: "JAN 1, 1610",
      head: "Event One",
      para: `Saturn's Rings seen by Galileo`,
    },
    {
      date: "AUG 30, 1659",
      head: "Event Two",
      para: `Christian Huygens realized rings were surrounding, not touching the Planet.`,
    },
    {
      date: "SEP 1, 1979",
      head: "Event Three",
      para: `Pioneer 11 in 1979, flying within 13,700 miles (22,000 kilometers) of Saturn, discovered the planet's outer rings as well as the presence of a strong magnetic field.`,
    },
    {
      date: "JUL 1, 2004",
      head: "Event Four",
      para: `12 science experiments concerning themselves with Saturn's moons, rings, atmosphere, magnetosphere and Titian's atmosphere.`,
    },
    {
      date: "SEP 2, 2005:",
      head: "Event Five",
      para: `The Huygens probe successfully landed on Titan, returning images of the surface.
      `,
    },
    {
      date: "JUN 28, 2012",
      head: "Event Six",
      para: "Cassini Finds Likely Subsurface Ocean on Saturn Moon.",
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

export default Saturn;
