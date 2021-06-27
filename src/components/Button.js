import React from 'react';

const Button = ({ click, children, type }) => {
  if (type === 'gray') {
    return (
      <button className="gray-operator p-6" onClick={click}>
        {children}
      </button>
    );
  } else if (type === 'orange') {
    return (
      <button className="orange-operator p-6" onClick={click}>
        {children}
      </button>
    );
  } else if (type === 'ivory') {
    return (
      <button className="numbers p-6" onClick={click}>
        {children}
      </button>
    );
  } else if (type === 'darkOrange') {
    return (
      <button className="orange-equal rounded-br-md p-6" onClick={click}>
        {children}
      </button>
    );
  }
  return (
    <button className="numbers rounded-bl-md p-6" onClick={click}>
      {children}
    </button>
  );
};

export default Button;
