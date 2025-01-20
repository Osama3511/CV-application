import Form from "./Form";
import { useState } from "react";
import "../styles/formCard.css"
export default function FormCard({ text, fields, onSubmit}) {
  const [isShown, setIsShown] = useState(false);
  
  const handleSubmit = (formData) => {
    onSubmit(formData);
  }

  return (
    <div className="form-card">
      <h1 className="form-card-title">{text}</h1>
      {isShown ? (
        <Form
          fields={fields}
          isShown={isShown}
          onClick={() => setIsShown(false)}
          onSubmit={handleSubmit}
        />
      ) : (
        <button className="form-card-button" onClick={() => setIsShown(true)}>Add new</button>
      )}
    </div>
  );
}