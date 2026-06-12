import React from "react";

function FAQSection() {
  return (
    <section className="py-5">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Frequently Asked Questions
        </h2>

        <div className="accordion" id="faqAccordion">

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                How does AurigaX compare rides?
              </button>
            </h2>

            <div
              id="faq1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                AurigaX compares ride fares and availability
                across multiple ride-hailing platforms like
                Ola, Uber, and Rapido to help you choose
                the best option.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Is AurigaX free to use?
              </button>
            </h2>

            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, AurigaX is completely free for users.
                You can compare rides without any extra cost.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq3"
              >
                Which ride apps are supported?
              </button>
            </h2>

            <div
              id="faq3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                AurigaX supports popular ride services
                including Ola, Uber, Rapido and more.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq4"
              >
                Can I book rides directly from AurigaX?
              </button>
            </h2>

            <div
              id="faq4"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                AurigaX helps you compare ride options and
                redirects you to the selected platform for
                booking.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQSection;