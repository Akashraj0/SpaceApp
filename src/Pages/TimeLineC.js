import React from "react";

export const TimeLineC = ({ date, des, head }) => {
  return (
    <>
      <li class="list-inline-item items-list">
        <div class="px-4">
          <div
            class="event-date badge bg-info"
            style={{ padding: "1rem", margin: "1rem" }}
          >
            {date}
          </div>
          <h5 class="pt-2">{head}</h5>
          <p
            style={{
              color: "white",
              margin: "auto",
              width: "50%",
              padding: "2rem",
            }}
          >
            {des}
          </p>
        </div>
      </li>
    </>
  );
};
