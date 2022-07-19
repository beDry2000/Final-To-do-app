import Home from './component/Home';
import './App.css';
import { useEffect } from 'react';
import useListContext from './context/hooks';
import { fetchJob } from './component/reducer/actions';

function App() {
  const [,dispatch] = useListContext();
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then(response => response.json())

      .then(data => {
        const todos = (
          data.todos.map(({ id, todo, completed }) => ({
            id,
            name: todo,
            completed,
            removed: false
          }))
        );
          dispatch(fetchJob(todos));
      })
  }, []);
  
  return (
    <>
      <Home />
    </>
  );
}

export default App;
