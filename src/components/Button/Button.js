import React from "react";
import styles from "./Button.module.css";
//
const Button = ({ type, children, onClick }) => {
  return (
    <button
      className={styles.button}
      type={type ? type : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
//
export default Button;
