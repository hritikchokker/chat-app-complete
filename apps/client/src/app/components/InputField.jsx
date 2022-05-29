import React from 'react';
function InputField({
  placeholder,
  type,
  name,
  onChange,
  value,
  onBlur,
  onFocus,
}) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      onChange={onChange}
    />
  );
}

export default InputField;
