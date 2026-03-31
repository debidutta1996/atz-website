export default function Industries() {
  const industries = [
    "IT & Technology",
    "Manufacturing",
    "Healthcare",
    "Retail & E-commerce",
    "Logistics",
    "Startups & SMEs",
  ];

  return (
    <div className="bg-light py-5 text-center">
      <h2 className="fw-bold mb-5">Industries We Serve</h2>

      <div className="container">
        <div className="row">
          {industries.map((item) => (
            <div className="col-md-4 mb-3" key={item}>
              <div className="card p-3 shadow">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}