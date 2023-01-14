import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdAdd,
} from 'react-icons/md';
import cn from 'classnames';
import { List } from 'react-virtualized';

const TodoItem = ({ todo, onToggle, onRemove, style }) => {
  const { id, text, done } = todo;

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className={`TodoListItem ${id}`}>
        <div className={cn('checkbox', { done })} onClick={() => onToggle(id)}>
          {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const onChange = (e) => onChangeInput(e.target.value);

  const rowRenderer = ({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoItem
        todo={todo}
        key={key}
        onToggle={onToggle}
        onRemove={onRemove}
        style={style}
      ></TodoItem>
    );
  };
  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요."
          value={input}
          onChange={onChange}
        ></input>
        <button type="submit">
          <MdAdd />
        </button>
      </form>
      <List
        className="TodoList"
        width={512}
        height={513}
        rowCount={todos.length}
        rowHeight={57}
        rowRenderer={rowRenderer}
        list={todos}
        style={{ outline: 'none' }}
      ></List>
    </div>
  );
};

export default Todos;
