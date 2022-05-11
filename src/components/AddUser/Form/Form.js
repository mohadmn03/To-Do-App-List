import React, { Fragment, useState } from "react";
import styles from "./Form.module.css";
import Button from "../../Button/Button";
//
const Form = ({ newStudent, closePopup }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  return (
    <Fragment>
      <h2>ADD A STUDENT</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          closePopup();
          newStudent({
            id: Math.floor(Math.random() * 1000),
            name: name,
            age: age,
            gender: gender,
          });
          setName("");
          setAge("");
          setGender("");
        }}
      >
        <div style={{ margin: "0 0 20px" }}>
          <input
            type={"text"}
            value={name}
            name="name"
            placeholder="Enter The Name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div style={{ margin: "0 0 20px" }}>
          <input
            type={"text"}
            value={age}
            name="age"
            placeholder="Enter The Age"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type={"text"}
            value={gender}
            name="gender"
            placeholder="Enter The Gender"
            onChange={(event) => {
              setGender(event.target.value);
            }}
          />
        </div>
        <div className={styles.tb}>
          <Button type="submit">Add</Button>
          <Button type="reset">Reset</Button>
        </div>
      </form>
    </Fragment>
  );
};
//
export default Form;
