import React, { Component } from "react";
import "../style/about.scss";
import serviceimg from "../img/servicebg.webp";

export default class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <div className="about-msg-container">
          <div className="left triangle"></div>
          <div className="right triangle "></div>
          <div className="about-msg">
            <h1>Why you should hire us</h1>
            <p>
              We are truly aware, call centre has important roles in many
              industries not only providing the outbound or inbound call, but
              organization also must comply with some regulations for example
              Perlindungan nasabah (POJK number 18 tahun 2018).
              <br />
              <br />
              Kandane has commitment to protect your customer data and working
              closely with your information security teams.
              <br />
              <br />
              Best of all, our talent are ready to serve your customer and ready
              for going extra mile with you.
            </p>
          </div>
        </div>

        <div className="container-o container">
        <div className="container-our-img">
            <img src={serviceimg} alt="Kandane Services" />
          </div>
          <div className="container-our ">
            <div className="our-services">
              <h3>Secure Data Handling</h3>
              <p>
                Providing recertification report, perform vulnerability
                assessment and support the encryptions.
              </p>
            </div>
            <div className="our-services">
              <h3>Technical Support</h3>
              <p>
                As our commitment to deliver excellent services we provide
                technical support.
              </p>
            </div>
            <div className="our-services">
              <h3>Professional Services</h3>
              <p>
                We treat our talent as our asset, we provide periodically
                training to enhance our services.
              </p>
            </div>
            <div className="our-services">
              <h3>Comply With Clients Infosec Policy</h3>
              <p>
                We try our best to support client due diligence, third party
                security assessment process, working closely with your
                information security to mitigate the risk.

              </p>
            </div>
          </div>
        </div>

        <div className="about-video">
          <iframe
            src="https://www.youtube.com/embed/clU8c2fpk2s"
            title="【Penyanyi Wanita】 Lemon / Kenshi Yonezu (Lagu Cover oleh KOBASOLO & Harutya)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    );
  }
}
