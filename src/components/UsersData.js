import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersData = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const [filterData, setFilterData] = useState(results);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      {
        setResults(res.data);
        setFilterData(res.data);
      });
  }, []);
  const handleUserSeacrh = (e) => {
    setTerm(e.target.value);
    let filterRes = [];
    filterRes = results.filter((result) => {
      return result.name.includes(term) !== -1;
    });
    setFilterData(filterRes);
  };
  return (
    <ul>
      <input type="text" onChange={(e) => handleUserSeacrh(e)} /> <br />
      {filterData.map((res) => (
        <li key={res.id}>name: {res.name}</li>
      ))}
    </ul>
  );
};

export default UsersData;
