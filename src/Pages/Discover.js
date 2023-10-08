import React from "react";
import "./Discover.css";
import { Navigation } from "./Navigation";
export const Discover = () => {
  return (
    <div className="Discover">
      <div>
        <Navigation />
      </div>
      <h1>Explore your Solar System</h1>
      <div className="Discover--Box">
        <div className="Discover--Planet">
          <div>
            <img
              width="40%"
              src={require("../Planet-Image/sun.png")}
              alt="planets"
            ></img>
            <a href="/sun">Sun</a>
          </div>
          <div>
            <img
              className="mercury"
              width="32%"
              src={require("../Planet-Image/mercury.png")}
              alt="planets"
            ></img>
            <a href="/Mercury">Mercury</a>
          </div>
          <div>
            <img
              width="60%"
              src={require("../Planet-Image/venus.png")}
              alt="planets"
            ></img>
            <a href="/earth">Venus</a>
          </div>
          <div>
            <img
              width="50%"
              src={require("../Planet-Image/jupiter.png")}
              alt="planets"
            ></img>
            <a href="/jupiter">Jupiter</a>
          </div>
          <div>
            <img
              width="45%"
              src={require("../Planet-Image/mars.png")}
              alt="planets"
            ></img>
            <a href="/mars">Mars</a>
          </div>
          <div>
            <img
              width="70%"
              src={require("../Planet-Image/Saturn.png")}
              alt="planets"
            ></img>
            <a href="/saturn">Saturn</a>
          </div>
          <div>
            <img
              width="36%"
              src={require("../Planet-Image/moon.png")}
              alt="planets"
            ></img>
            <a href="/moon">Moon</a>
          </div>
          <div>
            <img
              width="40%"
              src={require("../Planet-Image/Uranus.png")}
              alt="planets"
            ></img>
            <a href="/uranus">Uranus</a>
          </div>
          <div style={{ marginLeft: "7rem" }}>
            <img
              width="40%"
              src={require("../Planet-Image/Neptun.png")}
              alt="planets"
            ></img>
            <a href="/neptun" style={{ marginLeft: "3rem" }}>
              Neptune
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
