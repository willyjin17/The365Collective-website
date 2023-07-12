import React, { useState } from "react";

export const Services = (props) => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  const handleClick = (i) => {
    if (expandedService === i) {
      setExpandedService(null); 
    } else {
      setExpandedService(i); 
    }
  }

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Classes</h2>
          <p>
            We offer a wide range of classes for our clients. ...
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div 
                  key={`${d.name}-${i}`} 
                  className={`col-md-4 ${expandedService === i || hoveredService === i ? 'service-expanded' : ''}`} 
                  onClick={() => handleClick(i)} 
                  onMouseEnter={() => setHoveredService(i)}
                  onMouseLeave={() => setHoveredService(null)}
                  style={{cursor: 'pointer'}}>
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>

                    {expandedService === i && 
                      <>
                        <h3>{d.moreInfoTitle}</h3>
                        <ul style={{ textAlign: 'left' }}>
                          {d.moreInfoData1
                            ? d.moreInfoData1.map((info, i) => (
                              <li key={`${info.title}-${i}`}>
                                {info.title}
                                {info.subPoints && info.subPoints.length > 0 && 
                                  <ul className="nested-ul">
                                    {info.subPoints.map((subPoint, j) => (
                                      <li key={`${subPoint}-${j}`}>{subPoint}</li>
                                    ))}
                                  </ul>
                                }
                              </li>
                            ))
                            : null}
                        </ul>
                      </>
                    }

                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
