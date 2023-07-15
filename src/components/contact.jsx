import React from "react";

export const Contact = (props) => {

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=u13YV2_AvUW5QED5LfvlC46KV7_Kay9AmOEqal6zMd9URUhQMUYzMlpWOFVFQVVOUldYUzRNQkFEWC4u" className="btn btn-custom btn-lg" target="_blank" rel="noreferrer">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.linkedin : "/"}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 by The 365 Collective Inc. Designed by{" "}
            <a href="http://www.lukecutting.com" rel="nofollow">
              Luke Cutting
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
