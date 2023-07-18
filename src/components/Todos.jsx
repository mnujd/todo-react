import { FaListUl } from 'react-icons/fa6';
import { FaListAlt } from 'react-icons/fa';
import Todo from './Todo';

export default function Todos({ todos, func, status }) {
  // Filter out functions
  const filterByNotCompleted = (todo) => {
    return !todo.status;
  };

  const filterByCompleted = (todo) => {
    return todo.status;
  };

  // Data, according to status(completed or not)
  const data =
    status === 'incomplete'
      ? {
          title: 'Todos',
          color: 'red',
          filterBy: filterByNotCompleted,
          icon: <FaListUl className="mr-3" />,
        }
      : {
          title: 'Completed',
          color: 'green',
          filterBy: filterByCompleted,
          icon: <FaListAlt className="mr-3" />,
        };

  // Filter out todos according to status(completed or not)
  const allTodos = todos?.filter(data.filterBy);
  return (
    <div
      className={`mt-4 mx-4 p-4 border border-gray-300 rounded-md bg-${data.color}-50`}
    >
      {/* Title - according to status(completed or not) */}
      <h1 className="text-2xl flex items-center mb-2">
        {data.icon} {data.title} ({allTodos.length})
      </h1>
      {/* todos - according to status(completed or not) */}
      <div className="ml-5 items-center flex flex-col">
        {allTodos.map((todo) => (
          <Todo todo={todo} key={todo.id} func={func} />
        ))}
      </div>
    </div>
  );
}
