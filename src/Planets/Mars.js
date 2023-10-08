import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanetDetails from "../Pages/PlanetDetails";
import Timeline from "../Pages/timeline";
export const Mars = () => {
  const data = {
    getImageSrc: () => require("../Video/mars.mp4"),
    description: `Mars is no place for the faint-hearted. It’s dry, rocky, and bitter cold. The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors (Venus is the other). Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light and has two unusual moons.

      The Red Planet is a cold, desert world within our solar system. It has a very thin atmosphere, but the dusty, lifeless (as far as we know it) planet is far from dull. 
      Phenomenal dust storms can grow so large they engulf the entire planet, temperatures can get so cold that carbon dioxide in the atmosphere condenses directly into snow or frost, and marsquakes — a Mars version of an earthquake — regularly shake things up. Therefore, it is no surprise that this little red rock continues to intrigue scientists and is one of the most explored bodies in the solar system.
      `,
  };
  const time = [
    {
      date: "October 24, 1601: Tycho Dies, Torch Passed to Kepler",
      para: `Kepler discovered that the orbit of Mars—and those of all the other planets—was an ellipse, not a circle. From there Kepler crafted his laws of planetary motion, which describe how the planets orbit the Sun in the solar system and set the stage for Newton’s description of gravity`,
    },
    {
      date: `August 6, 1672: Polar Ice Cap Observed
      `,
      para: `In August 1672 Huygens observed and illustrated a bright spot on Mars, which was later discovered to be a polar ice cap. The question of Martian water would plague scientists centuries later.`,
    },
    {
      date: `July 14, 1965: Encounter with Mariner 4
      `,
      para: "Mercury, like other planets, experienced a period of intense bombardment by asteroids and comets, shaping its surface.",
    },
    {
      date: "November 14, 1971: Mariner 9 Comes to Visit",
      para: `On November 14, 1971, Mariner 9 became the first spacecraft to orbit a planet when it entered the orbit of Mars. Unexpectedly, Mariner 9 got front-row seats to a planet-wide dust storm. It also discovered major features like volcanoes, canyons, weather, and ice clouds.
      `,
    },
    {
      date: "August 7, 1996: LIFE!…or Something",
      para: "While orbiters and landers proved definitively that Mars harbored no humanoids, speculation remained as to whether tiny life-forms such as microbes might be lurking on or beneath Mars’s surface. ",
    },
    {
      date: "Tectonic Activity (1 to 2 billion years ago)",
      para: "Mercury's smooth plains indicate that volcanic activity occurred in its past. The volcanic activity is believed to have ended around 3 billion years ago.",
    },
    {
      date: "September 28, 2015: Liquid at Last",
      para: `Another orbiter made history on September 28, 2015, when NASA scientists announced that spectra taken by the Mars Reconnaissance Orbiter showed liquid water flowing on the planet’s surface.
      `,
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
};
export default Mars;
