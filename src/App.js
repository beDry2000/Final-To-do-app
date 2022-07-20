import Home from './component/Home';
import './App.css';
import { useEffect} from 'react';
import useListContext from './context/hooks';
import { fetchJob } from './component/reducer/actions';

import { useLoad } from './context/hooks';

function App() {
  const {loading, handleLoad} = useLoad();
  // const [load, setLoad] = useState(true);
  const [, dispatch] = useListContext();
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
        // setLoad(false);
        handleLoad(false);
      })
  }, []);

  return (
    <>
      {/* <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={load}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
      <Home />
    </>
  );
}

export default App;
