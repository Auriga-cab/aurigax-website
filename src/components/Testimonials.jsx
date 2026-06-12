import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    text: "AurigaX helped me save money by comparing fares instantly.",
  },
  {
    name: "Priya Verma",
    text: "Very clean interface and super easy to use.",
  },
  {
    name: "Amit Singh",
    text: "No need to open multiple apps anymore. Amazing experience.",
  },
];

function Testimonials() {
  return (
    <section className="py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          What Our Users Say
        </h2>

        <div className="row">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
            >
              <div className="feature-card p-4 rounded shadow h-100">
                <h5>⭐⭐⭐⭐⭐</h5>

                <p className="secondary-text">
                  "{item.text}"
                </p>

                <h6 className="fw-bold mt-3">
                  {item.name}
                </h6>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;