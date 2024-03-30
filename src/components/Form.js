import React, { useState } from "react";

function Form() {
  // State for first name, last name, submissions, and errors
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  // Handle changes in the first name input
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  // Handle changes in the last name input
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Validate first name is not empty
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      // Add new submission to the array of submitted data
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      // Clear input fields
      setFirstName("");
      setLastName("");
      // Clear errors
      setErrors([]);
    } else {
      // Set error message
      setErrors(["First name is required!"]);
    }
  }

  // Map over submitted data to display each submission
  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleFirstNameChange}
          value={firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          value={lastName}
          placeholder="Last Name"
        />
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 &&
        errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
