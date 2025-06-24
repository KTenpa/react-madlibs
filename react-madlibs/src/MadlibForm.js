import { useState } from "react";

function MadlibForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    noun: "",
    verb: "",
    adjective: "",
    adverb: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {Object.keys(formData).map(key => (
        <div key={key}>
          <label className="capitalize mr-2">{key}: </label>
          <input
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="border p-1 rounded"
          />
        </div>
      ))}
      <button className="bg-blue-500 text-white px-3 py-1 rounded" type="submit">Create Story</button>
    </form>
  );
}

export default MadlibForm;
