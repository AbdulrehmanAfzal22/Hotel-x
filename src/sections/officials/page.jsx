import React from "react";
import "./officials.css";
import { officialLogos, officialSectionContent } from "../../data/staticData";

const LOGOS = officialLogos;

// With only 4 logos, two copies isn't always wide enough to fill an
// ultra-wide screen, which leaves a blank gap before the loop restarts.
// Repeating the set a few times first guarantees the track is always
// wider than the viewport, so the seam is never visible.
const REPEATS = 6;
const HALF = Array.from({ length: REPEATS }, () => LOGOS).flat();
const TRACK = [...HALF, ...HALF]; 

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-heading">
        <h2>{officialSectionContent.heading} <br /><span className="marquee-design">{officialSectionContent.highlight}</span> </h2>
        <p>{officialSectionContent.description}</p>
      </div>

      <div className="marquee">
        <div className="marquee-track">
          {TRACK.map((src, i) => (
            <img src={src} alt="" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}