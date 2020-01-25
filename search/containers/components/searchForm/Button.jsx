import React from "react";

const Button = ({ onClick }) => (
  <div className="mt3">
    <input
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
      type="submit"
      value="Search"
      onClick={onClick}
    />
  </div>
);

export default Button;
