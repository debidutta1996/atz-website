export default function About() {
  return (
    <div id="about" className="container text-center py-5">
      <h2 className="fw-bold mb-5">Our Vision & Mission</h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h4>Vision</h4>
            <p>
              To be a trusted and preferred partner in manpower and financial solutions, enabling businesses to achieve operational excellence.
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h4>Mission</h4>
            <p>
              To deliver high-quality manpower and finance services through integrity, expertise, and innovation while creating value for our clients and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}