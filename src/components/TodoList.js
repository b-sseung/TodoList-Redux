import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

//array.map(() => { 중괄호일 경우에는 return이 들어가야 함})
//array.map(() => ( 괄호일 경우에는 return이 들어가지 않아도 됨))
const TodoList = ({ todos, onToggle, onRemove }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onToggle={onToggle}
          onRemove={onRemove}
          style={style}
        ></TodoListItem>
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="ToodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}
    ></List>
  );
};

export default React.memo(TodoList);
