import { useState } from "react";
import uber from "../assets/uber.svg";
import rapido from "../assets/rapido.png";
import ola from "../assets/ola.png";
import namma from "../assets/namma.png";
import quickride from "../assets/quickride.png";
import bgarattaxi from "../assets/bharattaxi.png";
import jugnoo from "../assets/jugnoo.png";
import rsrtc from "../assets/rsrtc.jpg";
import volvo from "../assets/volvo.png";
import intrcity from "../assets/intrcity.png";
import redbus from "../assets/redbus.png";


function HomeHero() {
  const [showQR, setShowQR] = useState(false);

  const handleDownload = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.aurigax.app",
        "_blank"
      );
    } else {
      setShowQR(true);
    }
  };

  return (
    <section className="hero-section">
      <div className="container text-center pt-5">
        <h1 className="hero-title">
          One Search.
          <br />
          <span className="text-primary">
            Every Way to Travel.
          </span>
        </h1>

        <p className="hero-desc">
          Compare cabs, autos and buses across multiple providers in one place.
          Trains and flights coming soon.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            className="btn btn-primary px-4 py-3"
            onClick={handleDownload}
          >
            Download now
          </button>

          <button
            onClick={() => {
              document.getElementById("how-it-works")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="btn btn-light px-4 py-3 border shadow-sm"
          >
            See how it works
          </button>
        </div>
      </div>

      {/* QR Modal */}
      {showQR && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "24px",
              borderRadius: "12px",
              textAlign: "center",
              maxWidth: "350px",
              width: "90%",
            }}
          >
            <button
              onClick={() => setShowQR(false)}
              style={{
                float: "right",
                border: "none",
                background: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <h4>Download AurigaX</h4>

            <img
              src="/qr-code.png"
              alt="QR Code"
              style={{ width: "220px" }}
            />

            <p className="mt-3">
              Scan this QR code to download AurigaX
            </p>
          </div>
        </div>
      )}

      <div className="network-wrapper">

  <div className="phone-frame">

    <div className="app-screen">

      <div className="live-chip">
  🟢 Live Fare Comparison
</div>

<h6 className="fw-bold mb-3 mt-2">
  Jaipur → Airport
</h6>

      <h6 className="fw-bold mb-3">
        Compare Travel
      </h6>

      <div className="mockup-input">
          <small>Pickup</small>
          <div>📍 Jaipur Railway Station</div>
        </div>
        
        <div className="mockup-input">
          <small>Drop</small>
          <div>🎯 Jaipur Airport</div>
        </div>

      <button className="btn btn-primary w-100 mb-3">
        Find Best Option →
      </button>

      <div className="results-scroll">
      <h6 className="section-label">CABS</h6>



      <div className="fare-card">
  <div className="provider-info">
    <img src={uber} alt="Uber" className="provider-logo" />
    <span>Uber</span>
  </div>

  <div>
    <strong>₹220</strong>
    <small className="d-block">12 min</small>
  </div>
</div>

<div className="fare-card cheapest">
  <div className="provider-info">
    <img src={rapido} alt="Rapido" className="provider-logo" />
    <span>Rapido</span>
  </div>

  <div>
    <strong>₹180</strong>
    <small className="d-block">10 min</small>
  </div>
  <div className="badge-tag">
  Cheapest
</div>

</div>

<div className="fare-card">
  <div className="provider-info">
    <img src={ola} alt="Ola" className="provider-logo" />
    <span>Ola</span>
  </div>

  <div>
    <strong>₹250</strong>
    <small className="d-block">11 min</small>
  </div>
</div>
<h6 className="section-label mt-4">BUSES</h6>
<div className="fare-card best-value">
  <div className="provider-info">
    <span>🚌</span>
    <span>RSRTC</span>
  </div>

  <div>
    <strong>₹450</strong>
    <small className="d-block">4h 30m</small>
  </div>

  <div className="badge-tag">
    Best Value
  </div>
</div>

<div className="fare-card">
  <div className="provider-info">
    <span>🚌</span>
    <span>Volvo</span>
  </div>

  <div>
    <strong>₹650</strong>
    <small className="d-block">4h 10m</small>
  </div>
</div>

<div className="fare-card">
  <div className="provider-info">
    <span>🚌</span>
    <span>IntrCity</span>
  </div>

  <div>
    <strong>₹590</strong>
    <small className="d-block">4h 20m</small>
  </div>
</div>
<div className="coming-soon-box">

  <div className="coming-item">
  🚆 Trains & ✈️ Flights Coming Soon
</div>

</div>
</div>

    </div>

  </div>

</div>

       <div className="container py-5">
  <h2 className="text-center fw-bold mb-5">
    Compare Travel Options
  </h2>

  <div className="row g-4 text-center">

    <div className="col-md-4">
      <div className="shadow-sm p-4 rounded h-100">
        <h1>🚕</h1>
        <h5 className="fw-bold">Cab Booking</h5>
        <p>
          Compare Uber, Ola and other ride providers instantly.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="shadow-sm p-4 rounded h-100">
        <h1>🛺</h1>
        <h5 className="fw-bold">Auto Rides</h5>
        <p>
          Find affordable auto options from multiple platforms.
        </p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="shadow-sm p-4 rounded h-100">
        <h1>🚌</h1>
        <h5 className="fw-bold">Bus Travel</h5>
        <p>
          Compare city bus options and choose the best route.
        </p>
      </div>
    </div>

  </div>
</div>

<div className="container py-5">
    <h2 className="fw-bold mb-3 text-center"> Why Choose AurigaX? </h2>
  <div className="row text-center g-4">

    <div className="col-md-4">
      <div className="feature-card">
        <div className="feature-icon">🚕</div>
        <h4 className="fw-bold">Compare Ride Apps</h4>
        <p>Find the best cab or auto fare.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="feature-card">
        <div className="feature-icon">🚌</div>
        <h4 className="fw-bold">Compare Bus Operators</h4>
        <p>Choose the best route and price.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="feature-card">
        <div className="feature-icon">⚡</div>
        <h4 className="fw-bold">One Search</h4>
        <p>Multiple providers, one result screen.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="feature-card">
        <div className="feature-icon">💰</div>
        <h4 className="fw-bold">Best Fare</h4>
        <p>Find the cheapest option instantly.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="feature-card">
        <div className="feature-icon">⏱️</div>
        <h4 className="fw-bold">ETA Comparison</h4>
        <p>See arrival times side by side.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="feature-card">
        <div className="feature-icon">🔄</div>
        <h4 className="fw-bold">No App Switching</h4>
        <p>Everything in one place.</p>
      </div>
    </div>

  </div>
</div>
<div className="container py-5">
  <section id="how-it-works" className="text-center">
  <h2>How it works</h2>
</section>

  <div className="row text-center g-4">

    <div className="col-md-4">
      <div className="shadow-sm p-4 rounded h-100">
        <h3>1️⃣</h3>
        <h5 className="fw-bold">Enter Destination</h5>
        <p>Choose your pickup and drop location.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="shadow-sm p-4 rounded h-100">
        <h3>2️⃣</h3>
        <h5 className="fw-bold">Compare Options</h5>
        <p>View fares and ETAs from multiple providers.</p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="shadow-sm p-4 rounded h-100">
        <h3>3️⃣</h3>
        <h5 className="fw-bold">Book Instantly</h5>
        <p>Select the best ride and continue to booking.</p>
      </div>
    </div>

  </div>
</div>

{/* Supported Travel  */}

<div className="container py-5">

  <h2 className="text-center fw-bold mb-5">
    Supported Travel Providers
  </h2>

  <div className="row g-4">

    <div className="col-lg-6">
      <div className="stat-card h-100 text-center">

        <h4 className="fw-bold mb-4">
          🚕 Ride Apps
        </h4>

        <div className="logo-track-static">

          <img src={uber} alt="Uber" />
          <img src={rapido} alt="Rapido" />
          <img src={ola} alt="Ola" />
          <img src={namma} alt="Namma" />
          <img src={quickride} alt="QuickRide" />
          <img src={jugnoo} alt="Jugnoo" />

        </div>

      </div>
    </div>

    <div className="col-lg-6">
      <div className="stat-card h-100 text-center">

        <h4 className="fw-bold mb-4">
          🚌 Bus Operators
        </h4>

        <div className="logo-track-static">

  <img src={rsrtc} alt="RSRTC" />
  <img src={volvo} alt="Volvo" />
  <img src={intrcity} alt="IntrCity" />
  <img src={redbus} alt="RedBus" />

</div>

      </div>
    </div>

  </div>

  <div className="text-center mt-5">

    <h4 className="fw-bold mb-3">
      🚀 Coming Soon
    </h4>

    <span className="badge bg-secondary me-2">
      🚆 Trains
    </span>

    <span className="badge bg-secondary">
      ✈️ Flights
    </span>

  </div>

</div>
{/* Final CTA */}
<div className="container text-center py-5 mt-5">
  <h2 className="fw-bold display-5">
   Why Pay More?

    <br />
    Compare Every Travel Option Before You Book.
  </h2>

  <p className="text-muted mt-3">
   Compare cabs, autos and buses in one place and choose the smartest way to travel.
  </p>

  <button className="btn btn-primary btn-lg mt-3 px-5">
    Compare Providers
  </button>
</div>
{/* Stats */}
{/* <div className="container py-5">
  <div className="row text-center">

    <div className="col-md-3">
      <h1 className="fw-bold">500K+</h1>
      <p>Users</p>
    </div>

    <div className="col-md-3">
      <h1 className="fw-bold">10+</h1>
      <p>Partners</p>
    </div>

    <div className="col-md-3">
      <h1 className="fw-bold">25+</h1>
      <p>Cities</p>
    </div>

    <div className="col-md-3">
      <h1 className="fw-bold">1M+</h1>
      <p>Searches</p>
    </div>

  </div>
</div> */}

</section>

  
    
  );
  
}

export default HomeHero;