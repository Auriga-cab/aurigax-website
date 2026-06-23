import React from "react";
import umesh from "../assets/umesh.png";


const teamMembers = [
  {
    name: "PURSHOTTAM LAL GUPTA",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/300x300",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Nishant Gupta",
    role: "Co-Founder & CTO",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQGNQeTztzwSCg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1653574376592?e=1783555200&v=beta&t=BXkPwIbDqwUUKZFOJUlFjpoIIOKKSQswAO6ashtsHrg",
    linkedin: "https://www.linkedin.com/in/nishantgupta95/",
  },
  {
    name: "Nikunj Maheshwari",
    role: "Lead Software Engineer",
    image: "https://via.placeholder.com/300x300",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Umesh Kumawat",
    role: "JN. Software Engineer",
    image: umesh,
    linkedin: "https://linkedin.com",
  },



];

function TeamSection() {
  return (
    <section
      className="py-5"
      style={{
        background: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          The Team
        </h2>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6"
            >
              <div
                className="position-relative overflow-hidden rounded shadow"
                style={{
                  height: "320px",
                  border: "1px solid var(--border-color)",
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />

                <div
                  className="position-absolute bottom-0 start-0 end-0 text-white p-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h5 className="mb-1 fw-bold">
                        {member.name}
                      </h5>
                      <small>{member.role}</small>
                    </div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-light btn-sm"
                    >
                      in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;