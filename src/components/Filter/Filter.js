import React, { useState } from "react";
import styles from "./Filter.module.css";
//
const Filter = ({ getFilterValue }) => {
  const [filterInput, setFilterInput] = useState("");
  return (
    <div className={styles.filter}>
      <input
        type="text"
        value={filterInput}
        placeholder="Write Name"
        onChange={(event) => {
          setFilterInput(event.target.value);
          getFilterValue(event.target.value);
        }}
      />
    </div>
  );
};
//
export default Filter;
