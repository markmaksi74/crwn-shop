import React from "react";
import './Button.styles.scss'

const Button = ({ children, buttonType, ...otherTypes }) => {
  const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
  };

  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherTypes}
    >
      {children}
    </button>
  );
};

export default Button;
