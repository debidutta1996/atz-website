import AnimatedSection from "./AnimatedSection";

export default function Services() {
  return (
    <div id="services" className="container section text-center">
      <AnimatedSection>
        <h2 className="fw-bold mb-5">Our Services</h2>
      </AnimatedSection>

      <div className="row">

        <div className="col-md-6">
          <AnimatedSection>
            <div className="card p-4 shadow">
              <h4 className="text-primary">HR Manpower</h4>
              <p>Recruitment, staffing & workforce planning</p>
            </div>
          </AnimatedSection>
        </div>

        <div className="col-md-6">
          <AnimatedSection>
            <div className="card p-4 shadow">
              <h4 className="text-info">Finance Services</h4>
              <p>Accounting, taxation & financial strategy</p>
            </div>
          </AnimatedSection>
        </div>

      </div>
    </div>
  );
}