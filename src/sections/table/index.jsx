import { Check, X } from "lucide-react";
import "./style.css";
import { companies, comparisonRows, tableSectionContent } from "../../data/staticData";

const CompetitorTable = () => {
  return (
    <section className="compare-section" id="comparison">
      <div className="compare-header">
        {/* <span>Comparison</span> */}
        <h2>
        <strong>{tableSectionContent.title}</strong> {tableSectionContent.highlight}
        </h2>
        <p>{tableSectionContent.description}</p>
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

          {comparisonRows.map((row) => (
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