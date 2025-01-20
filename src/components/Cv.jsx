import "../styles/cv.css"
export default function Cv({ formData }) {
  if (Object.keys(formData).length === 0) {
    return <p>No data submitted yet.</p>;
  }

  return (
    <div className="cv-container">
      <h1 className="cv-title">Your CV</h1>
      {Object.entries(formData).map(([section, data]) => (
        <section className="cv-section" key={section}>
          <h2 className="cv-section-title">{section}</h2>
          <ul className="cv-list">
            {Object.entries(data).map(([field, value]) => (
              <li key={field} className="cv-list-item">
                <strong>{field}</strong> {value}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
