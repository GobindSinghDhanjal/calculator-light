import React from "react";

export const Button = ({ number }) => {
  return (
    <div class="toggle">
      <input type="checkbox" />
      <span class="button"></span>
      <span class="label">{number}</span>
    </div>
  );
};
