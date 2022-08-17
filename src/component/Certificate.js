import React, { Component } from "react";
import cert3 from "../img/cloud.png";
import "../style/certificate.scss";

export default class Certificate extends Component {
  render() {
    return (
      <div className="certificate" id="certificate">
        <div className="container">
          <div className="certificate-msg ">
            <h1>Our Certification and Accreditation</h1>
            <p>
              <span>Kendane </span>
              merupakan sebuah perusahaan yang beranggotakan para ahli
              bersertifikasi di bidang compliance dan Cyber security bertujuan
              untuk mendorong terjadinya praktik bisnis yang patuh dan sesuai
              dengan hukum serta peraturan yang berlaku.
            </p>
          </div>
          <div className="certificate-img ">
            <img src={cert3} alt="" />
            <img src={cert3} alt="" />
            <img src={cert3} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
