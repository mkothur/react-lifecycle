import React, { useEffect, useState } from "react";
import axios from "axios";

const Pagination = () => {
  const [todos, setTodos] = useState([]);
  const [todosPerPage, setTodosPerPage] = useState(30);
  const [currentpage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos").then((res) =>
      setTodos(res.data)
    );
  }, []);

  const numOfTotalPages = Math.ceil(todos.length / todosPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  const indexOfLastTodo = currentpage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo); // slice ignore the last one ex slice(1, 3) --> its show 1 & 2

  const prevPageHandler = () => {
    if (currentpage !== 1) setCurrentPage(currentpage - 1);
  };
  const nextPageHandler = () => {
    if (currentpage !== numOfTotalPages) setCurrentPage(currentpage + 1);
  };

  return (
    <>
      <h2>Pagination</h2>
      <select onChange={(e) => setTodosPerPage(e.target.value)}>
        {[10, 20, 30, 40, 50].map((opt) => (
          <option>{opt}</option>
        ))}
      </select>
      {visibleTodos.map((todo) => {
        return (
          <p key={todo.id}>
            {todo.id}. {todo.title}
          </p>
        );
      })}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={prevPageHandler}>Prev</button>
        <p>
          {pages.map((page) => (
            <span
              className={`${currentpage === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {" "}
              {`${page} | `}
            </span>
          ))}
        </p>
        <button onClick={nextPageHandler}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
