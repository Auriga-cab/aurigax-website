
import uber from "../assets/uber.svg";
import rapido from "../assets/rapido.png";
import ola from "../assets/ola.png";
import namma from "../assets/namma.png";
import quickride from "../assets/quickride.png";
import bgarattaxi from "../assets/bharattaxi.png";
import jugnoo from "../assets/jugnoo.png";

function HomeHero() {
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
          <button className="btn btn-primary px-4 py-3">
            Download now
          </button>

          <button className="btn btn-outline-dark px-4 py-3">
            See how it works
          </button>
        </div>

        {/* Logos */}

        <div className="logo-row">

             <img src={uber} alt="" />
            
             <img src={rapido} alt="" />
             <img src={ola} alt="" />
             <img src={namma} alt="" />
             <img src={quickride} alt="" />
             <img src={bgarattaxi} alt="" />
             <img src={jugnoo} alt="" />

        </div>

      </div>

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


      {/* <div className="fare-card">
        <span>🚕 Uber</span>
        <strong>₹220</strong>
      </div>

      <div className="fare-card">
        <span>🛺 Rapido</span>
        <strong>₹180</strong>
      </div>

      <div className="fare-card">
        <span>🚕 Ola</span>
        <strong>₹250</strong>
      </div>

      <div className="fare-card">
        <span>🚌 RSRTC</span>
        <strong>₹40</strong>
      </div> */}
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


{/* <div className="fare-card">
        <span>🚌 RSRTC</span>
        <strong>₹40</strong>
      </div>  */}

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

<div className="container text-center py-5">
  <h2 className="fw-bold mb-3">
    Why Choose AurigaX?
  </h2>

  <p
    className="mx-auto text-muted"
    style={{ maxWidth: "800px" }}
  >
    AurigaX helps you compare ride options from multiple
    providers in one place. Save time, reduce costs,
    and choose the best ride instantly without switching
    between different apps.
  </p>
</div>

<div className="container py-5">
  <div className="row text-center">

    <div className="col-md-4">
      <h4 className="fw-bold">🚕 Compare Ride Apps</h4>
      <p>Find the best cab or auto fare.</p>
    </div>

    <div className="col-md-4">
      <h4 className="fw-bold">🚌 Compare Bus Operators</h4>
      <p>Choose the best route and price.</p>
    </div>

    <div className="col-md-4">
      <h4 className="fw-bold">⚡ One Search</h4>
      <p>Multiple providers, one result screen.</p>
    </div>

  </div>
</div>

<div className="container py-5">
  <h2 className="text-center fw-bold mb-5">
    How It Works ?
  </h2>

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

<div className="container py-5">
  <h2 className="text-center fw-bold mb-5">
    Sample Travel Savings
  </h2>

  <div className="table-responsive">
    <table className="table table-bordered text-center">
      <thead>
        <tr>
          <th>Route</th>
          <th>Cab</th>
          <th>Bus</th>
          <th>You Save</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Railway Station → Airport</td>
          <td>₹220</td>
          <td>₹40</td>
          <td>₹180</td>
        </tr>

        <tr>
          <td>Mansarovar → MI Road</td>
          <td>₹180</td>
          <td>₹30</td>
          <td>₹150</td>
        </tr>

        <tr>
          <td>Vaishali Nagar → Sindhi Camp</td>
          <td>₹250</td>
          <td>₹35</td>
          <td>₹215</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div className="onboard-strip">

  <div className="onboard-title flex ">
    Onboarded →
  </div>

  <div className="logo-marquee mt-3">
    <div className="logo-track">

      <img src={uber} alt="Uber" />
      <img src={rapido} alt="Rapido" />
      <img src={ola} alt="Ola" />
      <img src={namma} alt="Namma" />
      <img src={quickride} alt="QuickRide" />
      <img src={jugnoo} alt="Jugnoo" />

      {/* Duplicate for smooth loop */}
      <img src={uber} alt="Uber" />
      <img src={rapido} alt="Rapido" />
      <img src={ola} alt="Ola" />
      <img src={namma} alt="Namma" />
      <img src={quickride} alt="QuickRide" />
      <img src={jugnoo} alt="Jugnoo" />

    </div>
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
    Get Started
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