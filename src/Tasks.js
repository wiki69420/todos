const Tasks = ({ tasks })  => {

    return (
        <div>
            {tasks.tasks.map(todo => (
                <div className="todo-preview" key={todo._id} >
                    <h2>{ todo.name }
                    <button className="delete">X</button>
                    <button className="done">✓</button></h2>
                </div>
            ))}
        </div>
    );
}

export default Tasks;