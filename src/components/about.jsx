import React from "react";

export const About = (props) => {
  return (
    <>
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>How We Can Help</h2>
              <p>&emsp;{props.data ? props.data.paragraph : "loading..."}</p>
              <p>&emsp;{props.data ? props.data.paragraph2 : "loading..."}</p>
              <p>&emsp;{props.data ? props.data.paragraph3 : "loading..."}</p>
              <h3>Our Services</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                        <li key={`${d}-${i}`}> {d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Learning and Development</h2>
                <p>&emsp;{props.data ? props.data.paragraph4 : "loading..."}</p>
                <p>&emsp;{props.data ? props.data.paragraph5 : "loading..."}</p>
                <p>&emsp;{props.data ? props.data.paragraph6 : "loading..."}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/intro-bg.jpg" className="img-responsive" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
      </>
  );
};
