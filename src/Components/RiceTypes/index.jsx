import React, { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./index.css";
import { FaExclamationTriangle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

let RiceTypes = () => {
  const scrollerRef = useRef(null);

  const Types = [
    { id: uuidv4(), url: "https://res.cloudinary.com/dss6kupcu/image/upload/v1755582656/Brown-rice_pxudxf.jpg", alt: "Brown Rice", name: "Brown Rice", name2: "ముడి బియ్యం", price: 1600, quantity: "25 Kg & 50 Kg" },
    { id: uuidv4(), url: "https://res.cloudinary.com/dss6kupcu/image/upload/v1755582898/Lite-polished_Rice_ztwibz.jpg", alt: "Lite Polished Rice", name: "Lite Polished Rice", name2: "లైట్ పాలిష్డ్ రైస్", price: 1500, quantity: "25 Kg & 50 Kg" },
    { id: uuidv4(), url: "https://res.cloudinary.com/dss6kupcu/image/upload/v1753361834/4c19cf50-a8a0-444d-bc5a-4efef2df51d2_mz7lo1.png", alt: "BPT Old Rice", name: "BPT Old Rice", name2: "పాత బియ్యం", price: 1500, quantity: "25 Kg & 50 Kg" },
    { id: uuidv4(), url: "https://res.cloudinary.com/dss6kupcu/image/upload/v1753362838/2fa4e2da-19c4-43ad-b629-4d8790ee0144_jh8trp.png", alt: "BPT New Rice", name: "BPT New Rice", name2: "కొత్త బియ్యం", price: 1350, quantity: "25 Kg & 50 Kg" },
    { id: uuidv4(), url: "https://res.cloudinary.com/dss6kupcu/image/upload/v1753363100/e63150fd-1daf-4dde-8f80-cc888324813a_sv64gu.png", alt: "Steam Rice", name: "Steam Rice", name2: "వేపుడు బియ్యం", price: 1200, quantity: "25 Kg & 50 Kg" },
    { id: uuidv4(), url: "https://res.cloudinary.com/dss6kupcu/image/upload/v1753363587/IMG-20250722-WA0014_j9b5lq.jpg", alt: "Broken Rice", name: "Broken Rice", name2: "నూకలు", price: 1200, quantity: "25 Kg & 50 Kg" },
    { id: uuidv4(), url: "https://res.cloudinary.com/dss6kupcu/image/upload/v1753363338/IMG-20250722-WA0013_to98mx.jpg", alt: "Rice Husk(తవుడు)", name: "Rice Husk", name2: "తవుడు", price: 1400, quantity: "45 Kg" },
  ];

  const scrollByPage = (dir) => {
    if (!scrollerRef.current) return;
    const amount = scrollerRef.current.clientWidth; // scroll one “page”
    scrollerRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div className="container text-center my-5">
      <h1 className="heading mb-4">Types of Rice</h1>

      {/* carousel wrapper */}
      <div className="carousel position-relative d-flex align-items-center">
        <button className="carousel_btn left btn btn-light shadow-sm" onClick={() => scrollByPage("left")} aria-label="Scroll left">
          <FaChevronLeft />
        </button>

        <div className="rice-types-container d-flex overflow-auto no-scrollbar" ref={scrollerRef}>
          {Types.map((type) => (
            <div key={type.id} className="rice-card card mx-2 shadow-sm">
              <div className="image-container-rice">
                <img src={type.url} alt={type.alt} className="card-img-top" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{type.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{type.name2}</h6>
                <p className="card-text">Price: ₹{type.price}</p>
                <p className="card-text">Quantity: {type.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel_btn right btn btn-light shadow-sm" onClick={() => scrollByPage("right")} aria-label="Scroll right">
          <FaChevronRight />
        </button>
      </div>

      <h5 className="note mt-4 d-flex align-items-center justify-content-center text-danger">
        <FaExclamationTriangle className="me-2 note-icon" />
        All prices are for 25kg rice bags and may vary based on market rates. If you have any questions, please contact us.
      </h5>
    </div>
  );
};

export default RiceTypes;
