import {React,useState} from 'react'

function Todolist() {
    const[todos,setTodos]=useState([])
    const[inputValue,setinputValue]=useState('')

    const Addtodo=()=>{
          if(inputValue.trim()){
            setTodos([...todos,inputValue]);
            setinputValue('');
          }
    }
    
    const RemoveTodo=(index)=>{
       // const newTodos=todos.filter((_,i)=>i!=index)
       // method 2
       const newTodos=[...todos]
       newTodos.splice(index,1);
       setTodos(newTodos)

    }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          placeholder="Add a new to-do"
          className="flex-1 px-3 py-2 border rounded-l-md border-gray-300"
        />
        <button
          onClick={Addtodo}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{todo}</span>
            <button
              onClick={() => RemoveTodo(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist
