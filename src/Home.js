import { useState, useEffect } from 'react';
import Tasks from "./Tasks";
import useFetch from "./useFetch";
import NewTodo from "./NewTodo";


const Home = () => {


  return (
      <div className="home">
        <div className="links">
          <h3>
            <a href="/">All</a>
            <a href="/active">Active</a>
            <a href="/done">Done</a>
          </h3>
        </div>
        <NewTodo/>
      </div>
  );
}
 
export default Home;
