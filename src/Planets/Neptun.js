import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanetDetails from "../Pages/PlanetDetails";
import Timeline from "../Pages/timeline";
function Neptun() {
  const data = {
    getImageSrc: () => require("../Video/neptune.mp4"),
    description: `Dark, cold, and whipped by supersonic winds, the ice giant Neptune is the eighth and most distant planet in our solar system. The planet’s rich blue color comes from methane in its atmosphere, which absorbs red wavelengths of light but allows blue ones to be reflected back into space. There might be an ocean of super hot water under Neptune's cold clouds, and it does not boil away because incredibly high pressure keeps it locked inside. 

      Voyager 2 – after visiting Jupiter and Saturn like its sibling, Voyager 1 – continued on to explore Uranus and Neptune, and is still the only spacecraft to have visited those outer planets, confirming evidence the giant world had faint rings like the other gas planets.
      `,
  };
  const time = [
    {
      date: "1612",
      head: "Event One",
      para: "Galileo incorrectly records Neptune as a fixed star during observations with his small telescope.",
    },
    {
      date: "1845",
      head: "Event Two",
      para: "Astronomers Urbain Jean-Joseph Le Verrier in Paris and John Couch Adams in Cambridge, England, independently calculate the location of this postulated planet. ",
    },
    {
      date: "1846",
      head: "Event Three",
      para: "Astronomer Johann Gottfried Galle uses the Fraunhofer telescope at the Berlin Observatory and makes the first observations of Neptune, only 1 degree from its calculated position; Moreover, Neptune’s moon, Triton was discovered.",
    },
    {
      date: "1984",
      head: "Event Four",
      para: "Astronomers find evidence for the existence of a ring system around Neptune.",
    },
    {
      date: "1989",
      head: "Event Five",
      para: "Voyager 2 becomes the first and only spacecraft to visit Neptune, passing about 4,800 kilometers (2,983 miles) above the planet's north pole.",
    },
    {
      date: "2011",
      head: "Event Six",
      para: "Neptune completes its first 165-year orbit of the sun since its discovery in 1846.",
    },
    {
      date: "2016",
      head: "Event Seven",
      para: "Scientists using the Hubble Space Telescope discover a new dark spot on Neptune, the first new atmospheric vortex seen in the 21st century.",
    },
    {
      date: "Formation of Hollows (Less than 50 million years ago)",
      head: "Event Eight",
      para: "The formation of unusual, bright, and irregularly shaped depressions called hollow on Mercury's surface is a relatively recent geological phenomenon, possibly occurring within the last 50 million years.",
    },
    {
      date: "2022",
      head: "Event Nine",
      para: "NASA’s James Webb Space Telescope captures the clearest view of Neptune; In addition to several bright, narrow rings, the Webb image clearly shows Neptune’s fainter dust bands in infrared.",
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

export default Neptun;
