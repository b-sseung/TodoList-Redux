import TodoListItem from './TodoListItem';
import './TodoList.scss';

//array.map(() => { 중괄호일 경우에는 return이 들어가야 함})
//array.map(() => ( 괄호일 경우에는 return이 들어가지 않아도 됨))
const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onToggle={onToggle}
            onRemove={onRemove}
          ></TodoListItem>
        );
      })}
    </div>
  );
};

export default TodoList;
