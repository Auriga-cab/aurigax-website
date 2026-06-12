import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { toast } from "react-toastify";


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    emailjs.send(
  "service_6io40wn",
  "template_9lwsd68",
  {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
  },
  "ctbKPwTqd_aiPAIUm"
)
      .then(() => {
        alert("Message Sent Successfully ✅");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setLoading(false);
      })
                .catch((error) => {
            console.log("EMAILJS ERROR:", error);
          
            alert(
              JSON.stringify(error)
            );
          
            setLoading(false);
          });
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">

        <h1 className="text-center fw-bold mb-5">
          Contact
        </h1>

        <div className="row justify-content-center">
          <div className="col-lg-5">

            <form onSubmit={sendEmail}>

              <input
                type="text"
                name="name"
                className="form-control mb-2 p-3"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <small className="text-danger">
                {errors.name}
              </small>

              <input
                type="email"
                name="email"
                className="form-control mb-2 p-3 mt-3"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <small className="text-danger">
                {errors.email}
              </small>

              <input
                type="tel"
                name="phone"
                className="form-control mb-2 p-3 mt-3"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <small className="text-danger">
                {errors.phone}
              </small>

              <textarea
                name="message"
                rows="6"
                className="form-control mb-2 p-3 mt-3"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              <small className="text-danger">
                {errors.message}
              </small>

              <button
                     type="submit"
                     className="btn btn-primary w-100 py-3"
                     disabled={loading}
                   >
                     {loading ? "Sending..." : "Submit"}
                   </button>

            </form>

          </div>
        </div>

        <div className="row mt-5 pt-5">

          <div className="col-md-4 mb-4">
            <h2 className="fw-bold">Mail</h2>
                        <a
              href="mailto:support@aurigax.com"
              className="text-secondary text-decoration-none"
            >
              support@aurigax.com
            </a>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="fw-bold">Phone</h2>
            <a
             href="tel:+91xxxxxxxxxx"
             className="text-secondary text-decoration-none"
           >
             +91 xxxxxxxxxx
           </a>
          </div>

          <div className="col-md-4 mb-4">
            <h2 className="fw-bold">Address</h2>
            <a
                 href="https://maps.google.com/?q=A-916+Govind+Vihar+Surajpura+Jagatpura+Jaipur+Rajasthan+302029"
                 target="_blank"
                 rel="noreferrer"
                 className="text-secondary text-decoration-none"
               >
                 A-916, Govind Vihar, Surajpura,
                 <br />
                 Jagatpura, Jaipur, Rajasthan 302029,
                 <br />
                 India
               </a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;