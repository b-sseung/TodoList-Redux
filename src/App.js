import logo from './logo.svg';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import './scss/TodoTemplate.scss';
import './scss/TodoList.scss';
import './scss/TodoListItem.scss';
import './scss/TodoInsert.scss';

const App = () => {
  return (
    <div>
      <TodosContainer></TodosContainer>
    </div>
  );
};

export default App;
