import React from "react";

export const DisplayBox = ({ value }) => {
  return (
    <div className="display-box">
      <input
        placeholder="0"
        value={value}
        disabled
        type="text"
        name="text"
        className="input"
      />
    </div>
  );
};
