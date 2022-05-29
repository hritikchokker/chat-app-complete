import React from 'react';
function Button({ text, onClick, disabled, type }) {
  return (
    <button disabled={disabled} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default Button;
