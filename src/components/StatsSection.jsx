function StatsSection() {
  const stats = [
    {
      icon: "🚕",
      number: "5+",
      label: "Ride Apps",
    },
    {
      icon: "🚌",
      number: "3+",
      label: "Bus Operators",
    },
    {
      icon: "🔍",
      number: "1",
      label: "Unified Search",
    },
    {
      icon: "⚡",
      number: "24x7",
      label: "Available",
    },
  ];

  return (
    <section className="stats-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            Compare Multiple Travel Providers
          </h2>
          <p className="secondary-text">
            Search once and compare fares across ride apps and bus operators.
          </p>
        </div>

        <div className="row g-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="col-md-3 col-6"
            >
              <div className="stat-card text-center h-100">
                <div className="stat-icon">
                  {item.icon}
                </div>

                <h2 className="fw-bold mb-1">
                  {item.number}
                </h2>

                <p className="secondary-text mb-0">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;