import logo from "../assets/logo.png";
function About() {
  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        About
      </h1>

      {/* About Card */}
      <div
        className="theme-card shadow rounded-4 p-4 d-flex flex-column align-items-center mx-auto"
        style={{ maxWidth: "800px" }}
      >
        <p
          className="fs-5 mb-1"
          style={{ fontFamily: "Poppins", marginLeft: "10px" }}
        >
          At AurigaX, we are changing the way users choose and book domestic
        </p>

        <p
          className="fs-5 mb-1"
          style={{ fontFamily: "Bebas Neue", marginLeft: "80px" }}
        >
          transport. Our platform connects you with top ride-hailing services
          like Ola
        </p>

        <p
          className="fs-5 mb-1"
          style={{ fontFamily: "Bebas Neue", marginLeft: "10px" }}
        >
          Uber, and Rapido, all in one place. With AurigaX, you can quickly
          compare
        </p>

        <p
          className="fs-5 mb-1"
          style={{ fontFamily: "Bebas Neue", marginLeft: "90px" }}
        >
          prices and find the fastest rides, saving you time and money. We're
          here to
        </p>

        <p
          className="fs-5 mb-1"
          style={{ fontFamily: "Bebas Neue", marginLeft: "10px" }}
        >
          make your travel hassle-free and affordable.
        </p>
      </div>

      {/* Founders Image */}
      <div className="d-flex flex-column align-items-center">
        <img
          src="https://justbobit.com/assets/common/cofounders.svg"
          alt=""
          className="mt-5 img-fluid"
        />
      </div>

      {/* Platform Section */}
      <div>
        <div
          className="d-flex flex-column align-items-center"
          style={{ marginTop: "150px" }}
        >
          <h1 className="fw-bold">Our platform - AurigaX</h1>
        </div>

        <div
          className="theme-card shadow rounded-4 p-4 d-flex flex-column align-items-center mx-auto"
          style={{ maxWidth: "800px", marginTop: "20px" }}
        >
          <p
            className="fs-5 mb-1"
            style={{ fontFamily: "Poppins", marginLeft: "10px" }}
          >
            AurigaX is a smart mobility aggregator that helps users find the
            most affordable
          </p>

          <p
            className="fs-5 mb-1"
            style={{ fontFamily: "Bebas Neue", marginLeft: "80px" }}
          >
            and efficient rides across platforms like Ola, Uber, and Rapido,
            all in one
          </p>

          <p
            className="fs-5 mb-1"
            style={{ fontFamily: "Bebas Neue", marginLeft: "10px" }}
          >
            place. With deep integration into open mobility networks and ONDC
          </p>

          <p
            className="fs-5 mb-1"
            style={{ fontFamily: "Bebas Neue", marginLeft: "90px" }}
          >
            protocols, AurigaX offers a seamless, transparent, and
            cost-effective travel
          </p>

          <p
            className="fs-5 mb-1"
            style={{ fontFamily: "Bebas Neue", marginLeft: "10px" }}
          >
            experience, eliminating the need to juggle multiple apps.
          </p>
        </div>

        {/* Logo */}
        <div className="d-flex flex-column align-items-center">
          <img
            src={logo}
            alt="logo"
            className=" mt-5 img-fluid w-25 "
          />
        </div>

        {/* Vision & Mission */}
        <div className="theme-card p-4 rounded shadow-sm my-4">

          <div className="mb-4 mt-5">
            <h2>
              <img
                src="https://justbobit.com/assets/common/vision.svg"
                alt="Vision"
                style={{
                  height: "1em",
                  width: "auto",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              Vision
            </h2>

            <p>
              To be the go-to platform for seamless access to the best options
              across all essential services, starting with ride-hailing and
              expanding to redefine convenience in everyday life.
            </p>
          </div>

          <div>
            <h2>
              <img
                src="https://justbobit.com/assets/common/mission.svg"
                alt="Mission"
                style={{
                  height: "1em",
                  width: "auto",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              Mission
            </h2>

            <p>
              To empower people with a single, reliable platform that
              simplifies how they access essential services, beginning with
              smarter, safer, and more accessible ride-hailing, and evolving to
              meet their daily needs across multiple sectors.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;