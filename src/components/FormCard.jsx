import Form from "./Form";
import { useState } from "react";
export default function FormCard({ text, fields, onSubmit }) {
  const [isShown, setIsShown] = useState(false);
  
  const handleSubmit = (formData) => {
    onSubmit(formData);
    setIsShown(false);
  }

  return (
    <div>
      <h1>{text}</h1>
      {isShown ? (
        <Form
          fields={fields}
          isShown={isShown}
          onClick={() => setIsShown(false)}
          onSubmit={handleSubmit}
        />
      ) : (
        <button onClick={() => setIsShown(true)}>Add new</button>
      )}
    </div>
  );
}
