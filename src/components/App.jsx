import FormCard from "./FormCard";
import fields from "../scripts/data.js";
import Cv from "./Cv.jsx";
import React, { useState } from "react";
import "../styles/app.css";
function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (title, formData) => {
    setFormData((prevData) => ({
      ...prevData,
      [title]: formData,
    }));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Builder</h1>
      </header>
      <main className="app-main">
        <section className="form-section">
          {fields.map((field) => {
            return (
              <FormCard
                key={field.title}
                text={field.title}
                fields={field.formFields}
                onSubmit={(formData) => handleSubmit(field.title, formData)}
              />
            );
          })}
        </section>
        <section className="cv-section">
          <Cv formData={formData} />
        </section>
      </main>
    </div>
  );
}

export default App;
