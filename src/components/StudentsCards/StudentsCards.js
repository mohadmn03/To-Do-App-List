import React from "react";
import styles from "./StudentsCards.module.css";
//
const StudentsCards = ({ filterStudents }) => {
  //   creat students cards
  const student = filterStudents.map((element, index) => (
    <div
      className={styles.studentCard}
      key={index}
      id={element.id}
      style={{
        backgroundColor:
          element.gender === "men" ? "indianred" : "darkgoldenrod",
      }}
    >
      <p className={styles.id}>{element.id}</p>
      <p className={styles.name}>
        <span className={styles.exc}>Name:</span> {element.name}
      </p>
      <p className={styles.age}>
        <span className={styles.exc}>Age:</span> {element.age}
      </p>
      <span
        className={styles.removeStudent}
        id={element.id}
        title="remove"
        onClick={(event) => {
          event.target.parentElement.remove();
        }}
      >
        -
      </span>
    </div>
  ));
  return student;
};
//
export default StudentsCards;
