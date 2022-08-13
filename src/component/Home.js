import React, { Component } from "react";
import "../style/home.scss";
import Typical from "react-typical";

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="home-img">
          {/* <div className='home-text1'>SECURITY</div> */}
          {/* <div className='home-text2'>CYBER SECURITY</div> */}
        </div>
        <div className="home-msg">
          <span>Our Services </span>
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={["SERVICE", 2000, "CYBER SECURITY", 2000]}
          />
          <p>
            Connecting with consumers is the key to growing your brand, and
            outsourced customer service through Our solutions lets you help your
            customers 24/6/365. We also provide the cyber security services to
            protect your customer data.
          </p>
        </div>
        <div className="typing-text"></div>
      </div>
    );
  }
}
