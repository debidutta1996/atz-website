import AnimatedSection from "./AnimatedSection";

export default function WhyChoose() {
  const points = [
    "Experienced Professionals",
    "Reliable Deployment",
    "Cost Effective",
    "Strong Compliance",
    "Custom Solutions",
    "Data Security",
  ];

  return (
    <div className="gradient-bg text-white section text-center">
      <AnimatedSection>
        <h2 className="fw-bold mb-5">Why Choose Us</h2>
      </AnimatedSection>

      <div className="container">
        <div className="row">
          {points.map((p) => (
            <div className="col-md-4 mb-4" key={p}>
              <AnimatedSection>
                <div className="glass p-4">
                  {p}
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}