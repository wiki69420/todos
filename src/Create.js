import { useState } from "react";

const Create = () => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const tu = { text, done: false, id: 1 };
    
        console.log(tu);
    }

    return (
        <div className="addtodo">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="+ Add new TODO"
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Create;