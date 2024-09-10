import React from 'react'
import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import './service.css'
import TopBar from './../../components/topBar/TopBar';  // Assuming you have the TopBar component

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function Services() {
  return (
    <div>
      <Navbar />


      <div className="services-page">
        <TopBar />  


        <div className="services-section">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Essentials</h3>
              <p>We provide essential farming tools and services for crop cultivation.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services