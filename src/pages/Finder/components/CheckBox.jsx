import React, { useState } from "react";

function Checkbox({ children, disabled, checked, value, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
}

export default Checkbox;
