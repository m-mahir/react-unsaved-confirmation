import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavConfirmationDialog from "./ConfirmationDialog";
import "./Form.css";

const Form: FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleNavigate = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <NavConfirmationDialog when={!!input} />

      <div className="form-container">
        <h1 className="form-title">Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userInput" className="form-label">
              Input:
            </label>
            <input
              type="text"
              id="userInput"
              name="userInput"
              value={input}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your data"
            />
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
        <button onClick={handleNavigate} className="form-button">
          Go to Home
        </button>
      </div>
    </>
  );
};

export default Form;
