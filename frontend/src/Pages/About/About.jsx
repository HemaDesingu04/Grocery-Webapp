import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./About.css";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-section-container">
        <h1 className="Heading">
          About <span>Us</span>
        </h1>
        <section class="hero">
          <h1>Welcome to GrocerGo</h1>
          <p>We're passionate about making grocery shopping easier, faster, and more convenient for you.</p>
        </section>
        <section class="about-us">
          <h2>Our Story</h2>
          <p>GrocerGo was founded by a team of entrepreneurs who were frustrated with the traditional grocery shopping experience. We believed that there had to be a better way to shop for groceries, one that didn't involve long lines, crowded aisles, and endless searching for products.</p>
        </section>
        <section class="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Convenience</strong>: We believe that grocery shopping should be easy and convenient.</li>
            <li><strong>Quality</strong>: We're committed to providing high-quality products that meet our customers' expectations.</li>
            <li><strong>Customer Service</strong>: We're dedicated to providing exceptional customer service.</li>
            <li><strong>Sustainability</strong>: We're committed to reducing our environmental impact and promoting sustainable practices.</li>
          </ul>
        </section>
        {/* <section class="team">
          <h2>Our Team</h2>
          <ul>
            <li><strong>John Doe</strong>: Founder and CEO</li>
            <li><strong>Jane Smith</strong>: Co-Founder and CMO</li>
            <li><strong>Bob Johnson</strong>: CTO</li>
            <li><strong>Sarah Lee</strong>: Customer Service Manager</li>
          </ul>
        </section> */}
        <section class="partners">
          <h2>Our Partners</h2>
          <ul>
            <li><strong>Local Farmers</strong>: We partner with local farmers to source fresh, seasonal produce.</li>
            <li><strong>National Brands</strong>: We partner with national brands to offer a wide selection of products.</li>
            <li><strong>Food Banks</strong>: We partner with food banks to reduce food waste and support our community.</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
