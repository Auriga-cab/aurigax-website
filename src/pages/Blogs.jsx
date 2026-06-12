import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Blogs() {
  const blogs = [
    {
      title: "How to Save Money on Daily Rides",
      desc: "Compare ride prices before booking and save on every trip.",
      date: "June 2026",
    },
    {
      title: "Uber vs Ola vs Rapido",
      desc: "A complete comparison of fares, availability and ride experience.",
      date: "June 2026",
    },
    {
      title: "Why Ride Comparison Matters",
      desc: "See how comparing fares can reduce your transportation costs.",
      date: "June 2026",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AurigaX Blog</title>

        <meta
          name="description"
          content="Ride comparison tips, travel savings guides and mobility insights from AurigaX."
        />
      </Helmet>

      <div className="container py-5 mt-5">
        <h1 className="text-center fw-bold mb-5">
          AurigaX Blog
        </h1>

        <div className="row g-4">
          {blogs.map((blog, index) => (
            <div key={index} className="col-md-4">
              <div className="feature-card p-4 rounded shadow h-100">
                <small className="text-muted">
                  {blog.date}
                </small>

                <h4 className="fw-bold mt-2">
                  {blog.title}
                </h4>

                <p className="secondary-text">
                  {blog.desc}
                </p>

                <Link
                         to={
                           index === 0
                             ? "/blogs/how-to-save-money-on-daily-rides"
                             : index === 1
                             ? "/blogs/uber-vs-ola-vs-rapido"
                             : "/blogs/why-ride-comparison-matters"
                         }
                         className="btn btn-primary"
                       >
                         Read More
                       </Link>
        </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;