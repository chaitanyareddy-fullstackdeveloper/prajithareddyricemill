import React from "react";
import Typewriter from "../Typewriter";
import "./AboutUs.css";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Person 1 */}
      <div className="person-card saffron">
        <img src="https://res.cloudinary.com/dss6kupcu/image/upload/v1754901217/357ce702-16ef-44ab-b52d-3041275470f1_ezszse.png" alt="Person 1" className="person-img" />
        <div className="person-text">
          <h2>
            <Typewriter text="Bijjam.Venkata Reddy" />
          </h2>
          <p>
            <Typewriter text="H i user i am  mr Bijjam.Venkata Reddy I am the owner and procurator of Prajitha Reddy Rice Store & Rice Mill. I play a crucial role in maintaining the quality and authenticity of our rice products. My dedication to sourcing the finest grains ensures that our customers receive only the best." />
          </p>
        </div>
      </div>

      {/* Person 2 */}
      <div className="person-card white special-layout">
        <div className="person-name">
          <h2>
            <Typewriter text="Bijjam.Venkateshwar Reddy" />
          </h2>
          <p>
            <Typewriter text="H i user meet Mr Bijjam.Venkateshwar Reddy he is the vital part of the Prajitha Reddy Rice Store team. His dedication to quality control and customer satisfaction helps us maintain our reputation for excellence. He is also the partner of Prajitha Reddy Rice Store." />
          </p>
        </div>
        <img src="https://res.cloudinary.com/dss6kupcu/image/upload/v1754902003/Bababi_fkv8sd.png" alt="Person 2" className="person-img" />
      </div>

      {/* Person 3 */}
      <div className="person-card green">
        <img src="https://res.cloudinary.com/dss6kupcu/image/upload/v1772682934/WhatsApp_Image_2026-03-05_at_9.21.25_AM_knwbvj.jpg" alt="Person 3" className="person-img" />
        <div className="person-text">
          <h2>
            <Typewriter text="Bijjam.Krishna Reddy" />
          </h2>
          <p>
            <Typewriter text="H i user meet mr Bijjam.Krishna Reddy he is the key figure in the success of Prajitha Reddy Rice Store. With years of experience in the rice industry, He ensure that only the best quality rice reaches our customers." />
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          <Typewriter
            text="W elcome to Prajitha Reddy Rice Store, your reliable destination for premium quality rice. We are committed to delivering rice that meets the highest standards of purity, taste, and freshness. Whether you're buying rice for daily household use, preparing for a grand function, or stocking up for your retail or wholesale business, we have exactly what you need. Our journey is rooted in a passion for quality and customer satisfaction. Every grain of rice we offer is carefully processed and hygienically packed at our rice mill. We ensure freshness by packing rice directly at the source — no middlemen, no compromises. We believe in transparency and trust. we always welcome all our customers to visit our rice mill in person. See how our rice is cleaned, sorted, and packed with care. This open-door approach has helped us earn the confidence of hundreds of loyal customers over the years. Whether you're a homemaker, caterer, event organizer, or a business owner, you can count on us for consistent quality and fair pricing. At Prajitha Reddy Rice Store, we don’t just sell rice — we deliver a promise of excellence in every grain."
            speed={40}
          />
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
