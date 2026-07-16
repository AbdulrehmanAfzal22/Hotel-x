import { Check, X } from "lucide-react";
import "./table.css";

const companies = ["HotelX", "Cloudbeds", "Mews", "Hotelogix", "eZee"];

const rows = [
  {
    feature: "Native Multi-Branch Control",
    values: [true, false, false, false, false],
  },
  {
    feature: "Integrated Cafe & POS Billing",
    values: [true, true, false, true, false],
  },
  {
    feature: "Car Rental & Amenity Sync",
    values: [true, true, true, false, false],
  },
  {
    feature: "Live Housekeeping Mobile App",
    values: [true, false, false, false, true],
  },
  {
    feature: "Room Booking",
    values: [true, true, true, true, true],
  },
//   {
//     feature: "Housekeeping",
//     values: [true, true, false, true, false],
//   },
//   {
//     feature: "Channel Manager",
//     values: [true, true, true, true, true],
//   },
//   {
//     feature: "Restaurant POS",
//     values: [true, false, true, true, true],
//   },
//   {
//     feature: "Role-Based Security",
//     values: [true, true, true, false, true],
//   },
//   {
//     feature: "WhatsApp Integration",
//     values: [true, false, false, true, false],
//   },
];

const CompetitorTable = () => {
  return (
    <section className="compare-section" id="comparison">
      <div className="compare-header">
        {/* <span>Comparison</span> */}
        <h2>
        <strong>One Software</strong> All Needs
        </h2>
        <p>
          A cleaner, smarter hotel management system built for modern hotel
          operations.
        </p>
      </div>

      <div className="compare-table-wrap">
        <div className="compare-table">
          <div className="compare-row compare-head">
            <div className="feature-col">Capability</div>

            {companies.map((company, index) => (
              <div
                key={company}
                className={`company-col ${index === 0 ? "hotelx-head" : ""}`}
              >
                {index === 0 && <span className="best-badge">Best Choice</span>}
                <strong>{company}</strong>
              </div>
            ))}
          </div>

          {rows.map((row) => (
            <div className="compare-row" key={row.feature}>
              <div className="feature-col">{row.feature}</div>

              {row.values.map((value, index) => (
                <div
                  key={index}
                  className={`status-col ${index === 0 ? "hotelx-col" : ""}`}
                >
                  <span className={value ? "check-icon" : "cross-icon"}>
                    {value ? <Check size={17} /> : <X size={17} />}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitorTable;