import React, { useState } from "react";
import "../styles/form.css"
export default function Form({ fields, isShown, onClick, onSubmit }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
  );

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (isShown) {
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <label className="form-label" key={field}>
              {field}
              <input
                className="form-input"
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
            </label>
          );
        })}
        <div className="form-buttons">
          <button className="form-button cancel" type="button" onClick={onClick}>
            Cancel
          </button>
          <button className="form-button submit"type="submit">Submit</button>
        </div>
      </form>
    );
  }
}
