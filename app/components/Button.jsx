import React from "react";
import BackspaceIcon from "@mui/icons-material/Backspace";

export const Button = ({ value, btnClick, onEqual, onClear, onAllClear }) => {
  function onBtnClick() {
    if (value == "=") {
      onEqual();
    } else if (value == "C") {
      onClear();
    } else if (value === "AC") {
      onAllClear();
    } else {
      btnClick(value);
    }
  }

  return (
    <div className="toggle">
    <input onClick={onBtnClick} value={value} type="checkbox" />
    {value == "=" ? (
      <span className="equal-btn button"></span>
    ) : (
      <span className="button"></span>
    )}

    {typeof value === "number" || value === "00" || value === "." ? (
      <span className="label number">{value}</span>
    ) : value === "C" ? (
      <span style={{ color: "red" }} className="label">
        <BackspaceIcon />
      </span>
    ) : value === "=" ? (
      <span style={{ color: "white" }} className="label">
        {value}
      </span>
    ) : value === "AC" ? (
      <span style={{ color: "lightseagreen" }} className="label">
        {value}
      </span>
    ) : (
      <span className="label">{value}</span>
    )}
  </div>
  );
};
