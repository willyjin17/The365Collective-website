import React from "react";

export const Learning = (props) => {
  return (
    <div id="learning">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6 text">
              <div className="about-text">
                <h2>Learning and Development</h2>
                <p>&emsp;{props.data ? props.data.paragraph4 : "loading..."}</p>
                <p>&emsp;{props.data ? props.data.paragraph5 : "loading..."}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/intro-bg.jpg" className="img-responsive-2" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
  );
};
