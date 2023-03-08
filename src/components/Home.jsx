import React from "react";
import Courses from "./Data.json";
import { useState, useEffect } from "react";

const Home = () => {
  const [curso, setCurso] = useState([]);
  const getCursos = async () => {
    setCurso(Courses);
  };
  useEffect(() => {
    getCursos();
    console.log(curso);
  }, [curso]);
  return (
    <div>
      {" "}
      {Courses.map((course, index) => (
        <>
          {" "}
          <h2 key={index}> {course.name}</h2> <button> Detalles </button>{" "}
		  <p key={index}> {course.description}</p>
		  <h2 key={index}> {course.price}</h2>
		  <h3 key={index}> {course.category}</h3>
        </>
      ))}
    </div>
  );
};

export default Home;
