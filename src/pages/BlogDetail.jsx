import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function BlogDetail() {
  const { slug } = useParams();

  const blogs = {
  "uber-vs-ola-vs-rapido": {
    title: "Uber vs Ola vs Rapido: Which Ride Service Offers Better Value?",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c",
      
    author: "AurigaX Team",
    category: "Ride Comparison",
    

    content: [
      {
        heading: "Introduction",
        text: "Ride-hailing services have transformed urban transportation. Uber, Ola, and Rapido dominate the Indian market, each offering unique pricing models and features."
      },

      {
        heading: "Pricing Comparison",
        text: "Pricing varies based on demand, distance, and city. During peak hours, fare differences can be significant. Comparing rides before booking can save money."
      },

      {
        heading: "Availability",
        text: "Uber has wider city coverage, Ola offers strong local presence, and Rapido is often the fastest option for bike rides."
      },

      {
        heading: "Final Verdict",
        text: "The best platform depends on your route and timing. AurigaX helps compare all options instantly."
      }
    ]
  },
  "how-to-save-money-on-daily-rides": {
  title: "How to Save Money on Daily Rides",
  image:
    "https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  author: "AurigaX Team",
  category: "Money Saving",

  content: [
    {
      heading: "Introduction",
      text: "Daily commuting costs can add up quickly. Whether you're travelling to work, college, or running errands, small savings on each ride can make a significant difference over time."
    },

    {
      heading: "Compare Before You Book",
      text: "Different ride providers often charge different fares for the same route. Comparing prices before booking helps you choose the most affordable option available."
    },

    {
      heading: "Avoid Peak Hours",
      text: "Ride prices increase during rush hours and periods of high demand. Planning trips slightly earlier or later can help reduce costs."
    },

    {
      heading: "Use Ride Comparison Platforms",
      text: "Instead of opening multiple apps, use AurigaX to compare fares, estimated arrival times, and ride options in one place."
    },

    {
      heading: "Final Thoughts",
      text: "Saving money on transportation doesn't require major lifestyle changes. Small decisions like comparing fares and avoiding surge pricing can reduce your monthly travel expenses."
    }
  ]
},
"why-ride-comparison-matters": {
  title: "Why Ride Comparison Matters",
  image:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  author: "AurigaX Team",
  
  category: "Ride Comparison",

  content: [
    {
      heading: "The Problem with Multiple Apps",
      text: "Most users switch between Uber, Ola, Rapido, and other apps to check prices before booking. This process takes time and can be frustrating."
    },

    {
      heading: "Price Differences Are Real",
      text: "For the same pickup and drop location, ride providers can show significantly different fares. Comparing prices helps users avoid paying more than necessary."
    },

    {
      heading: "Better Decision Making",
      text: "Ride comparison is not only about price. ETA, vehicle availability, ride type, and service quality also play an important role in choosing the best ride."
    },

    {
      heading: "Time Saving Experience",
      text: "Instead of opening multiple apps, a comparison platform displays all available options on a single screen, saving valuable time."
    },

    {
      heading: "Why AurigaX",
      text: "AurigaX simplifies ride booking by bringing multiple ride providers together, helping users compare fares instantly and choose the best option."
    }
  ]
}
};

  const blog = blogs[slug];

  if (!blog) {
    return (
      <div className="container py-5 mt-5">
        <h1>Blog Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
  <title>AurigaX Blog</title>

  <meta
    name="description"
    content={blog.content}
  />
</Helmet>

      <div className="container py-5 mt-5">

  <span className="badge bg-primary mb-3">
    {blog.category}
  </span>

  <h1 className="fw-bold display-5 mb-3">
    {blog.title}
  </h1>

  <p className="text-muted">
    By {blog.author} • {blog.date}
  </p>

  <img
    src={blog.image}
    alt={blog.title}
    className="img-fluid rounded shadow my-4"
    style={{
      width: "100%",
      maxHeight: "500px",
      objectFit: "cover",
    }}
  />

  {blog.content.map((section, index) => (
    <div key={index} className="mb-5">

      <h2 className="fw-bold mb-3">
        {section.heading}
      </h2>

      <p className="fs-5">
        {section.text}
      </p>

    </div>
  ))}

</div>

    </>
  );
}

export default BlogDetail;