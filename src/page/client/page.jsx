import React from "react";
import "./client.css";

import hotel1 from "../../assets/hotel-1.png";
import hotel2 from "../../assets/hotel-2.png";
import hotel3 from "../../assets/hotel-3.png";
import hotel4 from "../../assets/hotel-4.png";
import hotel5 from "../../assets/hotel-3.png";
import hotel6 from "../../assets/hotel-4.png";

const LOGOS = [hotel1, hotel2, hotel3, hotel4, hotel5, hotel6];

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
           Trusted by Boutique Hotels, 


          <span>Luxury Resorts, and Global Hospitality Chains</span>
        </h2>

        <p>
         Placeholder row for your actual independent hotel, hospitality group, and
resort partner logos
        </p>
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