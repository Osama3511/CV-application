import FormCard from "./components/FormCard";
import data from "./scripts/data.js";
import React, { useState } from "react";
function App() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (key, formData) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: formData,
    }));
  };

  return (
    <div>
      {data.map((element) => {
        return (
          <FormCard
            key={element.title}
            text={element.title}
            fields={element.formFields}
            onSubmit={(formData) => handleSubmit(element.title, formData)}
          />
        );
      })}

      <div>{JSON.stringify(formData, null, 2)}</div>
    </div>
  );
}

export default App;
