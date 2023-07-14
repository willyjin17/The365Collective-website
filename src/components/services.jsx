import React, { useState, useEffect, useRef } from "react";

export const Services = (props) => {
  const [expandedService, setExpandedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [animation, setAnimation] = useState('');
  const prevExpandedService = useRef();

  useEffect(() => {
    if (prevExpandedService.current != null && expandedService === null) {
      setAnimation('slide-up');
    } else if (expandedService !== null) {
      setAnimation('slide-down');
    }
    prevExpandedService.current = expandedService;
  }, [expandedService]);

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
          We offer a wide range of classes for our clients. From general end user training to more in depth classes for administrators. We even offer class customization to ensure that your users are getting exactly what they need to be successful.
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
                      <div className={animation}>
                        <p>{d.description}</p>
                        <p>{d.italics}</p>
                        <h3>{d.moreInfoTitle}</h3>
                        <ul style={{ textAlign: 'left' }}>
                          {d.moreInfoData
                            ? d.moreInfoData.map((info, i) => (
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
                      </div>
                      </>
                    }

                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=u13YV2_AvUW5QED5LfvlC46KV7_Kay9AmOEqal6zMd9URUhQMUYzMlpWOFVFQVVOUldYUzRNQkFEWC4u" className="btn btn-custom btn-lg" target="_blank" rel="noreferrer">
          Contact Client Services
        </a>
      </div>
    </div>
  );
};
