import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          background: "linear-gradient(rgba(0,0,0,0.55), rgba(15,23,42,0.75))",
          height: "100%",
          width: "100%",
        }}
        className="d-flex align-items-center justify-content-center"
      >
        {/* Centered Content */}
        <div className="container text-center text-white">

          <motion.h1
            className="display-3 fw-bold"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Business Growth with Smart Solutions
          </motion.h1>

          <p className="mt-4 mx-auto col-md-8">
            We deliver HR manpower and financial services that drive efficiency,
            compliance, and sustainable growth.
          </p>

          {/* Buttons */}
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">

            <button
              className="btn btn-light px-4 py-2"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Get Started
            </button>

            <a
              href="#services"
              className="btn btn-outline-light px-4 py-2"
            >
              Explore Services →
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}