import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const gatherInput = (e) => {
    e.preventDefault();
    addBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <form onSubmit={gatherInput}>
      <label htmlFor="width">
        Width:
        <input
          type="text"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="height">
        Height:
        <input
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="backgroundColor">
        Background Color:
        <input
          type="text"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </label>
      <button type="submit">ADD BOX</button>
    </form>
  );
};

export default NewBoxForm;
