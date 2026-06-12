function NotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <h1 className="display-1 fw-bold text-primary">
        404
      </h1>

      <h3>Page Not Found</h3>

      <p className="secondary-text">
        The page you are looking for doesn't exist.
      </p>

      <a href="/" className="btn btn-primary">
        Go Home
      </a>
    </div>
  );
}

export default NotFound;