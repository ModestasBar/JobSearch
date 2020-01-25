import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Button from "./Button";

const Search = ({ onUrlChange, onKeywChange, onClick, header }) => (
  <div className="db w-100 pr3">
    <h2 className="baskerville fw1">{header}</h2>
    <Input label="City" handler={onUrlChange} />
    <Input label="Key word" handler={onKeywChange} />
    <Button onClick={onClick} />
  </div>
);

Search.propTypes = {
  onUrlChange: PropTypes.func.isRequired,
  onKeywChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired
};

export default Search;
