import React, { useState } from "react";
export default function Form({ fields, isShown, onClick, onSubmit }) {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(...formData, { [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClick();
  };

  if (isShown) {
    return (
      <form onSubmit={handleSubmit}>
        {fields.map((field) => {
          return (
            <label key={field}>
              {field}
              <input
                type="text"
                onChange={handleChange}
              />
            </label>
          );
        })}
        <label>
          Your Short Descriptoin
          <textarea></textarea>
        </label>
        <button className="cancel" type="button" onClick={onClick}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
