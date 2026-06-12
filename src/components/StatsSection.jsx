function StatsSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row text-center">

          <div className="col-md-3 col-6 mb-4">
            <h2 className="fw-bold text-info">50K+</h2>
            <p className="secondary-text">
              Rides Compared
            </p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h2 className="fw-bold text-info">10+</h2>
            <p className="secondary-text">
              Apps Connected
            </p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h2 className="fw-bold text-info">100+</h2>
            <p className="secondary-text">
              Cities Covered
            </p>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h2 className="fw-bold text-info">99.9%</h2>
            <p className="secondary-text">
              Uptime
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StatsSection;