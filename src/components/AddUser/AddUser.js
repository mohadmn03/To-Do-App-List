import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./AddUser.module.css";
import Form from "./Form/Form";
//
const BackDrop = ({ showPopup, closePopup }) => {
  return (
    <div
      className={`${styles.backdrop} ${showPopup ? styles.showBD : ""}`}
      onClick={() => {
        closePopup();
      }}
    ></div>
  );
};
const Menu = ({ showPopup, newStudent, closePopup }) => {
  return (
    <div className={`${styles.menu} ${showPopup ? styles.showM : ""}`}>
      <Form newStudent={newStudent} closePopup={closePopup} />
    </div>
  );
};
const AddUser = ({ showPopup, closePopup, newStudent }) => {
  return ReactDOM.createPortal(
    <Fragment>
      <BackDrop showPopup={showPopup} closePopup={closePopup} />
      <Menu
        showPopup={showPopup}
        closePopup={closePopup}
        newStudent={newStudent}
      />
    </Fragment>,
    document.getElementById("addUser_Popup")
  );
};
//
export default AddUser;
