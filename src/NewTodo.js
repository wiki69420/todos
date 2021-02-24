import { useState } from "react";
import Tasks from "./Tasks";
import useFetch from "./useFetch";

const NewTodo = () => {


    const { data: tasks } = useFetch('https://maks.internship.animativ.dev/api/v1/tasks')

    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = { text };
    
        fetch('https://maks.internship.animativ.dev/api/v1/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(todo)
        })
        .then(() => {
          console.log('new todo added');
        })
    }

    return (
        <div>
            <div className="addtodo">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="+ Add new TODO"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </form>
            </div>
                {tasks && <Tasks tasks={tasks} />}
            <div className="items">
                <p>{tasks && tasks.tasks.length} items left</p>
            </div>
        </div>
    );
  }
   
  export default NewTodo;