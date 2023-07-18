import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaPlusCircle } from 'react-icons/fa';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);
  const [val, setVal] = useState('');

  // Add todo
  const handleSubmit = (e) => {
    e.preventDefault();
    if (val) {
      //Create new todo
      const newTodo = {
        // id: todos.length > 0 ? todos[todos.length - 1]?.id + 1 : 1,
        id: uuidv4(),
        name: val,
        status: false,
      };
      // Marge new todo with existing todos
      setTodos([...todos, newTodo]);

      //Reset input filed
      setVal('');
    }
  };

  // Status change(complete or not complete)
  const statusChange = (newTodo) => {
    const newTodos = todos.filter((todo) => todo.id !== newTodo.id);
    setTodos([...newTodos, newTodo]);
  };

  // Delete a specific todo
  const deleteTodo = (delTodo) => {
    const newTodos = todos.filter((todo) => todo.id !== delTodo.id);
    setTodos([...newTodos]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container container-hw py-4 rounded-md">
        <div className="border border-gray-300 rounded-sm mx-auto my-4">
          {/* Todo Form */}
          <form
            onSubmit={handleSubmit}
            className="flex m-3 h-10 items-center text-2xl justify-center"
          >
            <FaPenToSquare />
            <input
              type="text"
              placeholder="Add todo"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              className="m-2 p-2 focus:outline-none rounded-sm"
            />
            <button type="submit">
              {' '}
              <FaPlusCircle style={{ color: '#1da52d' }} />{' '}
            </button>
          </form>
        </div>
        <hr />
        <div>
          {/* Incomplete todos are here */}
          <Todos
            todos={todos}
            func={{ statusChange, deleteTodo }}
            status="incomplete"
          />
        </div>
        <div>
          {/* Completed todos are here */}
          <Todos
            todos={todos}
            func={{ statusChange, deleteTodo }}
            status="completed"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
