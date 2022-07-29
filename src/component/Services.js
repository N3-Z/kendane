import React, { Component } from 'react'
import '../style/services.scss'
import callCentre from '../img/customer-service.png'
import dataProtection from '../img/security.png'
import itService from '../img/cyber-security.png'
import education from '../img/online-learning.png'

export default class Services extends Component {
  render() {
    return (
      <div className='container-service'>
        <div className='service-title'>OUR SERVICES</div>
        <div className='container-services'>
          <div className='services'>
            <div className='service-img'>
              <img src={callCentre} alt=""/>
            </div>
            <div className='service-detail'>
              <span className='service-name'>Call Centre</span>
              <p>Outsource services to help partner handling customer issues</p>
            </div>
          </div>
          <div className='services'>
            <div className='service-img'>
              <img src={dataProtection} alt=""/>
            </div>
            <div className='service-detail'>
              <span className='service-name'>Data Protection</span>
              <p>Providing solution how to handle the sensitive data whitin the organizations</p>
            </div>
          </div>
          <div className='services'>
            <div className='service-img'>
              <img src={itService} alt="" />
            </div>
            <div className='service-detail'>
              <span className='service-name'>IT Services</span>
              <p>IT Govermance services, IT service management, Penetration Testing</p>
            </div>
          </div>
          <div className='services'>
            <div className='service-img'>
              <img src={education} alt="" />
            </div>
            <div className='service-detail'>
              <span className='service-name'>Multi Media and Educations</span>
              <p>Security Awareness training and social media campaign</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
