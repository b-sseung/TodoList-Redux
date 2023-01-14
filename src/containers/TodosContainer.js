import React from 'react';
import Todos from '../components/Todo';
import { changeInput, insert, toggle, remove } from '../modules/todo';
import { connect } from 'react-redux';

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={changeInput}
        onInsert={insert}
        onToggle={toggle}
        onRemove={remove}
      ></Todos>
    </div>
  );
};

export default connect(
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
