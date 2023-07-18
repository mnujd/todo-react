import { FaDeleteLeft } from 'react-icons/fa6';
export default function Todo({ todo, func }) {
  const { statusChange, deleteTodo } = func;

  // Toggle complete/incomplete todo
  const handleChange = () => {
    todo.status = !todo.status;
    statusChange(todo);
  };

  return (
    <div className="items-center flex border-b m-1 text-xl justify-between w-3/6">
      <div className={`${todo.status ? 'line-through' : ''} mr-6`}>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={handleChange}
          className="mr-4 w-4 h-4"
        />
        {todo.name}
      </div>
      <button onClick={() => deleteTodo(todo)} title="Delete">
        <FaDeleteLeft style={{ color: '#C82424' }} />
      </button>
    </div>
  );
}
