import { increment, incrementSync } from "./store/reducers";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state=>state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>Count: {counter.count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementSync())}>Increment Sync</button>
    </div>
  );
}

export default App;
