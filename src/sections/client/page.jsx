import React from "react";
import "./client.css";
import { clientLogos, clientSectionContent } from "../../data/staticData";

const LOGOS = clientLogos;

const REPEATS = 6;
const HALF = Array.from({ length: REPEATS }, () => LOGOS).flat();
const TRACK = [...HALF, ...HALF];

export default function HotelClients() {
  return (
    <section className="hotel-clients-section" id="clients">
      <div className="hotel-clients-header">
        {/* <span className="hotel-clients-badge">
          Trusted Hospitality
        </span> */}

        <h2>
           {clientSectionContent.title}&nbsp; <br />


          <span>{clientSectionContent.highlight}</span>
        </h2>

        <p>{clientSectionContent.description}</p>
      </div>
      <div className="hotel-clients-marquee">
        <div className="hotel-clients-track">
          {TRACK.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Hotel"
              className="hotel-client-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}