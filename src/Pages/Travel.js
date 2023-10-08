import React from "react";
import "./Travel.css";
import { Navigation } from "./Navigation";
import { Game } from "./Game";
import { useFormik } from "formik";
import * as Yup from "yup";
const Travel = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      depature: "",
      arrival: "",
      date: "",
      time: "",
      people: "",
      days: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert("Your ride has been booked");
    },
  });
  return (
    <div className="Travel--Layout">
      <div>
        <Navigation />
      </div>
      <div>
        <Game />
      </div>
      <div className="Travel--Box">
        <div className="Astronaut">
          <h3>Let's get you a ride</h3>
          <img
            className="Astronaut_img"
            width={"100%"}
            src={require("../Image/Astronaut.png")}
            alt="Astronaut_img"
          ></img>
        </div>
        <div className="Travel--Booking">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input
                style={{ color: "black" }}
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name || formik.errors.name ? (
                <div style={{ color: "#FC3D21" }}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <input
                id="time"
                type="email"
                name="email"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email || formik.errors.email ? (
                <div style={{ color: "#FC3D21" }}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <input id="date" type="date" name="date" />
              {formik.touched.date || formik.errors.date ? (
                <div style={{ color: "#FC3D21" }}>{formik.errors.date}</div>
              ) : null}
            </div>
            <div>
              <select {...formik.getFieldProps("time")}>
                <option style={{ color: "black" }} selected>
                  Time
                </option>
                <option style={{ color: "black" }} value="1">
                  6:00
                </option>
                <option style={{ color: "black" }} value="2">
                  12:00
                </option>
                <option style={{ color: "black" }} value="3">
                  18:00
                </option>
                <option style={{ color: "black" }} value="4">
                  00:00
                </option>
              </select>
              {formik.touched.time || formik.errors.time ? (
                <div style={{ color: "#FC3D21" }}>{formik.errors.time}</div>
              ) : null}
            </div>
            <div>
              <select id="depature" {...formik.getFieldProps("depature")}>
                <option selected>--Depature Destination--</option>
                <option value="1">Earth</option>
                <option value="2">Earth's Moon</option>
              </select>
              {formik.touched.depature || formik.errors.depature ? (
                <div style={{ color: "#FC3D21" }}>{formik.errors.depature}</div>
              ) : null}
            </div>
            <div>
              <select id="arrival" {...formik.getFieldProps("arrival")}>
                <option selected>--Arrival Destination--</option>
                <option value="1">Earth</option>
                <option value="1">Sun</option>
                <option value="2">Saturn</option>
                <option value="3">Jupiter</option>
                <option value="4">Venus</option>
                <option value="5">Neptune</option>
                <option value="6">Mercury</option>
                <option value="7">Mars</option>
                <option value="8">Uranus</option>
              </select>
              {formik.touched.arrival || formik.errors.arrival ? (
                <div style={{ color: "#FC3D21" }}>{formik.errors.arrival}</div>
              ) : null}
            </div>
            <div>
              <select id="people" {...formik.getFieldProps("people")}>
                <option selected>--Number of Passengers--</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
              </select>
              {formik.touched.people || formik.errors.people ? (
                <div style={{ color: "#FC3D21" }}>{formik.errors.people}</div>
              ) : null}
            </div>
            <div>
              <select id="days" {...formik.getFieldProps("days")}>
                <option selected>--Period of Stay--</option>
                <option value="1">One Year</option>
                <option value="2">Two Year</option>
                <option value="3">Three Year</option>
              </select>
              {formik.touched.days || formik.errors.days ? (
                <div style={{ color: "#FC3D21" }}>{formik.errors.days}</div>
              ) : null}
            </div>
            <button type="submit" className="Travel-Button">
              Book
            </button>
          </form>
        </div>
        <div className="Travel--Discover">
          <a className="Tavel-Link" href="/Discover">
            {/* <h5>Discover</h5> */}
          </a>
        </div>
      </div>
      <div className="Travel--Box1" style={{ padding: "5rem" }}>
        <div>
          <h2 style={{ marginTop: "5rem", marginBottom: "4rem" }}>
            KNOW YOUR TRAVEL
          </h2>
          <ul></ul>
          <p>
            Having articulated cutting-edge research, our stellar journeys are
            at 90% the relativistic speed of light.
          </p>
          <p>
            You’ll be boarding our moonliner “Nila” for a pitstop at our moon
            base.
          </p>
          <p>
            Then, our deep-spaceliner “Hermes” will transfer you to your desired
            planet.
          </p>
          <p style={{ marginBottom: "4rem" }}>
            Your intraplanet travel will be via rovers, pods and buggies.
          </p>
        </div>
        <div>
          <h2 style={{ marginTop: "5rem", marginBottom: "4rem" }}>
            KNOW YOUR STAY
          </h2>
          <p>
            Your required oxygen levels, radiation and temperature shielding are
            taken care of.
          </p>
          <p>
            Your staystations make use of the planet’s gravity to give you a
            familiar environment.
          </p>
          <p>Your well being is further aided by planet-specific fauna.</p>
          <p style={{ marginBottom: "4rem" }}>
            Do not miss munching our multicuinse-multiplanetary varieties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Travel;
