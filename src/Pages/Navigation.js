import React from "react";

export const Navigation = () => {
  return (
    <div>
      <nav class="navbar navbar-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/Home">
            SOLAR SAFARI
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Navigation
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/Home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Discover">
                    Discover
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Travel">
                    Book a Ride
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/AboutUs">
                    AboutUs
                  </a>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
