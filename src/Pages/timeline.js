import React from "react";
import { TimeLineC } from "./TimeLineC";

function Timeline({ t }) {
  return (
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-lg-12">
          <div class="horizontal-timeline">
            <ul class="list-inline items">
              {t?.map((times) => (
                <div>
                  <TimeLineC
                    key={times.date}
                    des={times.para}
                    head={times.head}
                    date={times.date}
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
