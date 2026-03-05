                                                                                                                                                                                                                                                            import React, { useState, useEffect } from "react";
import "./index.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkoqoqw");
  const [countdown, setCountdown] = useState(15);
  const [showForm, setShowForm] = useState(true);
  const [selectedLang, setSelectedLang] = useState("Telugu");

  const contacts = [
    { id: 1, name: "Bijjam.Venkat Reddy", email: "prajithareddyricestores@gmail.com", phone: "+919676543356" },
    { id: 2, name: "Bijjam.Chaitanya Kumar Reddy", email: "chaitanyakumarreddybijjum@gmail.com", phone: "+917981012359" },
  ];

 
  useEffect(() => {
    if (state.succeeded) {
      setShowForm(false);
      setCountdown(15);

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setShowForm(true); 
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [state.succeeded]);

  const getMessage = () => {
    if (selectedLang === "Telugu") {
      return "ధన్యవాదాలు సర్, మీ క్వెరీ మాకు విజయవంతంగా వచ్చింది. మా టీమ్ మీ క్వెరీ చూసిన వెంటనే మిమ్మల్ని సంప్రదిస్తుంది.";
    } else {
      return "Thank you sir, we have received your query successfully. Our team will reach you as soon as they review it.";
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>

      {!state.succeeded && showForm ? (
        <Form className="contact-form" onSubmit={handleSubmit} action="https://formspree.io/f/xjkoqoqw" method="POST">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" name="fullName" placeholder="Full Name" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" name="phone" placeholder="Phone" pattern="[0-9]{10}" required />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLanguage">
              <Form.Label>Preferred Language</Form.Label>
              <Form.Select
                name="language"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
              >
                <option value="Telugu">Telugu</option>
                <option value="English">English</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City/Town</Form.Label>
              <Form.Control type="text" name="city" placeholder="City/Town" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select name="state" defaultValue="Andhra Pradesh">
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" name="zip" placeholder="Enter PIN Code" pattern="[0-9]{6}" required />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Form>
      ) : (
        !showForm && (
          <div className="success-msg">
            <p>{getMessage()}</p>
            <p>⏳ You can submit a new query in {countdown} seconds.</p>
          </div>
        )
      )}

      <div className="contact-list">
        {contacts.map((contact) => (
          <div key={contact.id} className="contact-card">
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <div className="contact-actions">
              <a href={`tel:${contact.phone}`} className="btn call-btn">
                <FaPhoneAlt /> Call
              </a>
              <a
                href={`https://wa.me/${contact.phone}?text=Hello%20${contact.name},%20I%20am%20user%20from%20this%20Location%20want%20to%20know%20about%20the%20cost%20of%20each%20type%20of%20rice.%20Can%20you%20share%20me%20further%20details%20please?`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn whatsapp-btn"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href={`mailto:${contact.email}?subject=Rice%20Store%20Inquiry&body=Hello%20${contact.name},%20I%20am%20a%20customer%20from%20this%20Location%20and%20want%20to%20know%20about%20the%20rice%20prices.%20Please%20share%20further%20details.`}
                className="btn email-btn"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
