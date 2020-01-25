import React from "react";

const Input = ({ label, handler }) => (
  <div className="mt3">
    <label className="db fw6 lh-copy f6" htmlFor="email-address">
      {label}
    </label>
    <input
      className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      type="email"
      name="email-address"
      id="email-address"
      onChange={handler}
    />
  </div>
);

export default Input;
