import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Navigation } from "./Navigation";

export const Home = () => {
  const navigate = useNavigate();
  const handlebuttonClick = () => {
    navigate("/Travel");
  };
  const handlebuttonClick1 = () => {
    navigate("/Discover");
  };
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="Layout">
        <div className="Layout--Box1">
          <h1>Are you – Someone who still holds the flat-earth theory?</h1>
          <h1>Someone who believes in the matrix?</h1>
          <h1>Someone who’s baffled by the theory of relativity? </h1>
          <h5>
            Well, you have arrived at the right place. We all wish to be out
            there in the infinite, right? It’s high time that we take you there.
            Hop on for a thrilling ride through the jungle of space.
          </h5>
          <div className="Layout--Button">
            <button className="Layout--btn" onClick={handlebuttonClick}>
              Book a Ride
            </button>
            <button className="Layout--btn" onClick={handlebuttonClick1}>
              Discover
            </button>
          </div>
        </div>
        <div className="Box--Flex">
          {/* <div>
            <img
              className="Rocket"
              width={"100%"}
              src={require("../Image/Rocket.png")}
              alt="space"
            ></img>
            <p>Let's Fly</p>
          </div> */}
          {/* <div className="Side-text">
            <h3 className="side">Explore!</h3>
            <h3 className="side">Dream!</h3>
            <h3 className="side">Achieve!</h3>
          </div> */}
        </div>
      </div>
      <div className="Layout--Box2">
        <h1>About Us</h1>
        <div className="Box2">
          <div>
            <p>
              Solar Safari is a planetary tourism company, focused on
              transporting humans from earth to every other corner in the Solar
              System. Your travel and stay is designed to provide an incredible
              experience in the vastness of space, with the aim of enriching the
              human minds.
            </p>
            <p>
              It all started when our iPhones couldn't capture the moon vividly.
              We're a team of engineers, researchers, designers, project
              managers and sales folks. Creating a moonbase became our primary
              notion. We then proceeded to expand our services throughout our
              heliocentric system.
            </p>
            <p>
              Navigate around to explore the possible itineraries. Our
              state-of-the-art spacecraft and space suites are equipped with the
              best in comfort and security. Fostering the preservation of the
              pristine beauty of space and our home planet, we are actively
              engaged in sustainable initiatives.
            </p>
            <h3 style={{ margin: "3rem" }}>
              THE RIGHT MIX OF ESCAPADE AND EDUCATION
            </h3>
            <p>
              Your cosmic odyssey with Solar Safari leads you into a new era of
              human exploration. You will also acquire expertise that transcends
              boundaries, breaks barriers, and unlocks the mysteries of the
              universe. What are you still waiting for? Your ticket to the stars
              is just a click away.
            </p>
          </div>
        </div>
        {/* <img width="20%" src={require("../Image/Symbol.png")} alt="no" /> */}
      </div>
      <div className="Layout--Box3">
        <div className="Contact--Box">
          <div>
            <img width="30%" src={require("../Image/Rocket.png")} alt="no" />
          </div>
          <div className="Contact--hyper">
            <h5 style={{ padding: "0.5rem" }}>Navigate</h5>
            <a href="/Home">Home</a>
            <a href="/Travel">Booking Page</a>
            <a href="/Home">About Us</a>
            <a href="/Home">Game</a>
          </div>
          <div className="Contact--hyper">
            <h5 style={{ padding: "0.5rem" }}>Follow Us</h5>
            <a href="/Home">Instagram</a>
            <a href="/Travel">Face Book</a>
            <a href="/Home">Twitter</a>
            <a href="/Home">Threads</a>
          </div>
          <div className="footer-comment">
            <h6>GET IN TOUCH Have a question?</h6>
            <p style={{ fontSize: "12px" }}>
              Connect with a Safari expert to get started. Whether it is a
              hyperluminal query (or) a query related to the multiverse (or)
              careers at Solar Safari, we are here to help. Headquarters : Esc
              Avenue, Solar Safari Inc., The Moon. Contact : +MO 1023456789
              e-Mail : info@solarsafari.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
