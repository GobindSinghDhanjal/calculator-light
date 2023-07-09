import React from "react";

export const OperationButton = ({ operation }) => {
  return (
    <div class="operation-toggle toggle">
      <input type="checkbox" />
      <span class="operation button"></span>
      <span class="label">{operation}</span>
    </div>
  );
};
