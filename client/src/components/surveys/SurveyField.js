import React from "react";

// input and label are destructuring off of props object
// errors and touched are nested destructuring
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div style={{ marginBottom: "20px" }} className="red-text">
        {touched && error}
      </div>
    </div>
  );
};
