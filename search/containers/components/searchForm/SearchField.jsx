import React from "react";
// import FormCheckBox from './FormCheckBox';
import Search from "./Search";

const SearchField = ({ onUrlChange, onKeywChange, onClick }) => (
  <div className="mw7 center flex justify-between items-center ph3 ph0-l">
    <Search
      onUrlChange={onUrlChange}
      onKeywChange={onKeywChange}
      onClick={onClick}
      header="Main"
    />
  </div>
);

export default SearchField;
