import React from "react";

// input and label are destructuring off of props object
// errors and touched are nested destructuring
export default ({ input, label, meta: { error, touched, active, dirty } }) => {
  return (
    <div className="row">
      <div className="input-field col s12">
        <label className={`${ active || dirty ? 'active' : ''}`}>{label}</label>
        <input {...input} style={{ marginBottom: "5px" }} />
        <div style={{ marginBottom: "20px" }} className="red-text">
          {touched && error}
        </div>
      </div>
    </div>
  );
};
