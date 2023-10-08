import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanetDetails from "../Pages/PlanetDetails";
import Timeline from "../Pages/timeline";

function Moon() {
  const data = {
    getImageSrc: () => require("../Video/moon.mp4"),
    description: `About 27% the size of the earth, our moon is the only place beyond earth where humans have set foot, so far. The Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years. 

      Missions that have explored the Moon have found no evidence to suggest it has its own life. However, the Moon could be the site of future colonization by humans. The discovery that the Moon harbors water ice, and that the highest concentrations occur within darkened craters at the poles, makes the Moon a little more hospitable for future human colonists.
      `,
  };
  const time = [
    {
      date: "1610",
      head: "Event One",
      para: `Thomas Harriot and Galileo Galilei draw the first telescopic representation of the moon.`,
    },
    {
      date: "1645",
      head: "Event Two",
      para: "Michael Florent van Langren makes the first map of the moon.",
    },
    {
      date: "1753",
      head: "Event Three",
      para: "Roger Joseph Boscovich proves the moon has no atmosphere.",
    },
    {
      date: "1959",
      head: "Event Four",
      para: "Soviet spacecraft Luna 2 reaches the moon, impacting near the crater Autolycus.",
    },
    {
      date: "1969",
      head: "Event Five",
      para: "The Apollo 11 mission made the first crewed landing on the moon and returned samples.",
    },
    {
      date: "2008",
      head: "Event Six",
      para: "India launches its Chandrayaan 1 moon orbiter for chemical, mineralogical and photo-geologic mapping of the Moon.",
    },
    {
      date: "End of Major Geological Activity (1 billion years ago)",
      head: "Event Seven",
      para: "Mercury's major geological activity, including volcanic and tectonic processes, seems to have largely ceased by around 1 billion years ago.",
    },
    {
      date: "2013",
      head: "Event Eight",
      para: "NASA’s Lunar Atmosphere and Dust Environment Explorer (LADEE) spacecraft orbits and impacts the Moon to gather information about the lunar atmosphere, and the environmental influences on lunar dust.",
    },
    {
      date: "2022",
      head: "Event Nine",
      para: "NASA launches CAPSTONE, a pathfinder for Gateway, to help reduce risk for future spacecraft by validating innovative navigation technologies.",
    },
    {
      date: "2023",
      head: "Event Ten",
      para: "India’s Chandrayaan 3 mission becomes the first to land near the lunar south pole.",
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
export default Moon;
