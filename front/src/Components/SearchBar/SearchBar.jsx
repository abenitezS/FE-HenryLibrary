import React, { useState } from "react";

const obj = [
  { id: 1, name: "abc" },
  { id: 2, name: "bcd" },
  { id: 3, name: "cde" },
  { id: 4, name: "def" },
  { id: 5, name: "efg" },
  { id: 6, name: "fgh" },
];

export default function SerachBar() {
  const [resultsSearch, setResultsSearch] = useState([]);
  const handledSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.value) {
      let results = obj.filter((o) => {
        return o.name.includes(e.target.value);
      });
      if (results.length) {
        setResultsSearch(results);
      }
    } else {
      setResultsSearch([]);
    }
  };
  return (
    <>
      <form onSubmit={handledSubmit}>
        <input type={"text"} onChange={handleChange} />
        <ul>
          {resultsSearch.length
            ? resultsSearch.map((r) => <li>{r.name}</li>)
            : null}
        </ul>
        <input type={"submit"} value={"Search"} />
      </form>
    </>
  );
}
