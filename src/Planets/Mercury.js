import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlanetDetails from "../Pages/PlanetDetails";
import Timeline from "../Pages/timeline";
function Mercury() {
  const data = {
    getImageSrc: () => require("../Video/mercury.mp4"),
    description:
      "Mercury is the first planet from the Sun and the smallest in the Solar System .It is a little bigger than Earth's Moon. Mercury is a world of black starry skies, gray craters, no moon and not enough gravity to hold an atmosphere. Without an atmosphere, Mercury is a silent world without any sound. A year on Mercury is 88 Earth days. The distance of Mercury from the Sun is 58 million km. The gravity of Mercury is 3.7 m/s².It was named after the Roman messenger god Mercury.",
  };
  const time = [
    {
      date: "Formation (4.6 billion years ago)",
      para: "Mercury, like the rest of the solar system, formed from the solar nebula, a rotating disk of gas and dust.",
    },
    {
      date: "Differentiation (4.5 billion years ago)",
      para: "During its early history, Mercury underwent a process called differentiation, where heavier elements sank to its core, leaving lighter materials in the outer layers. ",
    },
    {
      date: "Early Bombardment Period (4.1 to 3.8 billion years ago)",
      para: "Mercury, like other planets, experienced a period of intense bombardment by asteroids and comets, shaping its surface.",
    },
    {
      date: "Caloris Basin Formation (3.9 billion years ago)",
      para: "One of the most prominent features on Mercury's surface is the Caloris Basin, a large impact crater formed around 3.9 billion years ago during the late heavy bombardment.",
    },
    {
      date: "Volcanic Activity (3.5 to 3 billion years ago)",
      para: "Languages only differ in their pronunciation and their most common words.",
    },
    {
      date: "Tectonic Activity (1 to 2 billion years ago)",
     para: "Mercury's smooth plains indicate that volcanic activity occurred in its past. The volcanic activity is believed to have ended around 3 billion years ago.",
    },
    {
      date: "End of Major Geological Activity (1 billion years ago)",
      para: "Mercury's major geological activity, including volcanic and tectonic processes, seems to have largely ceased by around 1 billion years ago.",
    },
    {
      date: "Formation of Hollows (Less than 50 million years ago)",
      para: "The formation of unusual, bright, and irregularly shaped depressions called hollow on Mercury's surface is a relatively recent geological phenomenon, possibly occurring within the last 50 million years.",
    },
    {
      date: "MESSENGER Mission (2004-2015)",
     para: "NASA's MESSENGER (MErcury Surface, Space ENvironment, GEochemistry, and Ranging) spacecraft, launched in 2004, provided valuable data about Mercury's surface, magnetic field, and composition. It orbited Mercury from 2011 to 2015.",
    },
    {
      date: "BepiColombo Mission (Launched in 2018)",
      para: "The European Space Agency (ESA) and the Japan Aerospace Exploration Agency (JAXA) launched the BepiColombo mission in 2018 to further study Mercury. It is expected to arrive in orbit around Mercury in the 2020s.",
    },
    {
      date: "Ongoing Exploration and Research (2023 and beyond)",
      para: "Ongoing and future missions, such as BepiColombo and potentially others, will continue to provide valuable insights into the geological history and composition of Mercury.",
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

export default Mercury;
