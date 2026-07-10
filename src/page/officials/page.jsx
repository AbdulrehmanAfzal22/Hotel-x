import React from "react";
import "./officials.css";
import iso from "../../assets/iso.png";
import owasp from "../../assets/owasp.png";
import aws from "../../assets/aws.png";
import fbr from "../../assets/fbr-logo.png";

const LOGOS = [iso, owasp, aws, fbr];

// With only 4 logos, two copies isn't always wide enough to fill an
// ultra-wide screen, which leaves a blank gap before the loop restarts.
// Repeating the set a few times first guarantees the track is always
// wider than the viewport, so the seam is never visible.
const REPEATS = 6;
const HALF = Array.from({ length: REPEATS }, () => LOGOS).flat();
const TRACK = [...HALF, ...HALF]; // two equal halves keeps translateX(-50%) seamless

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {TRACK.map((src, i) => (
          <img src={src} alt="" key={i} />
        ))}
      </div>
    </div>
  );
}