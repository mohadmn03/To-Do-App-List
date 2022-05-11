import React, { useState } from "react";
import styles from "./App.module.css";
import StudentsCards from "../components/StudentsCards/StudentsCards";
import Filter from "../components/Filter/Filter";
import Button from "../components/Button/Button";
import AddUser from "../components/AddUser/AddUser";
//
const App = () => {
  //students filter state
  const [filterValue, setFilterValue] = useState("");
  //students toogle state
  const [showStudents, setShowStudents] = useState(true);
  //add user popup
  const [showPopup, setShowPopup] = useState(false);
  //students list
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Bachir",
      age: 33,
      gender: "men",
    },
    {
      id: 2,
      name: "Yaakoub",
      age: 24,
      gender: "men",
    },
    {
      id: 3,
      name: "Seyaf",
      age: 31,
      gender: "men",
    },
    {
      id: 4,
      name: "Othaimine",
      age: 19,
      gender: "men",
    },
    {
      id: 5,
      name: "Anas",
      age: 7,
      gender: "men",
    },
    {
      id: 6,
      name: "Mariya",
      age: 17,
      gender: "women",
    },
    {
      id: 7,
      name: "Halima",
      age: 6,
      gender: "women",
    },
    {
      id: 8,
      name: "Tasnime",
      age: 9,
      gender: "women",
    },
    {
      id: 9,
      name: "Atika",
      age: 33,
      gender: "women",
    },
  ]);
  //get value from filter.js
  const getFilterValue = (filterValueFfjs) => {
    setFilterValue(filterValueFfjs);
  };
  //get value from filter.js
  //filter students
  const filterStudents = () => {
    return students.filter((student) => {
      return (
        student.name.toLowerCase().substr(0, filterValue.length) ===
        filterValue.toLowerCase()
      );
    });
  };
  //add new student to students
  const newStudent = (data) => {
    setStudents((prevStudents) => {
      prevStudents.push(data);
      return prevStudents;
    });
  };
  //filter students
  return (
    <div className={styles.container}>
      {/* Add user popup */}
      <AddUser
        showPopup={showPopup}
        closePopup={() => {
          setShowPopup(false);
        }}
        newStudent={newStudent}
      />
      {/* Add user popup */}
      <h1 className={styles.title}>THE STUDENTS</h1>
      {/* control div */}
      <div className={styles.control}>
        {/* show and hide section */}
        <Button
          onClick={() => {
            setShowStudents(!showStudents);
          }}
        >
          {showStudents ? "Hide Students" : "Show Students"}
        </Button>
        {/* show and hide section */}
        {/* add student section */}
        <Button
          onClick={() => {
            setShowPopup(true);
          }}
        >
          Add Student
        </Button>
        {/* add student  section */}
      </div>
      {/* control div */}
      {/* students cards container */}
      <div
        className={`${styles.studentCards} ${
          showStudents ? styles.show : styles.hide
        }`}
      >
        {/* students cards container */}
        {/* Filter section */}
        <Filter getFilterValue={getFilterValue} />
        {/* Filter section */}
        {/* creat students cards */}
        <StudentsCards filterStudents={filterStudents()} />
        {/* creat students cards */}
      </div>
    </div>
  );
};
//
export default App;
