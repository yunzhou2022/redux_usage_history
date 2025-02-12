import { useStore } from "./context";
import { increment, incrementSync } from "./store/reducers";
import { useEffect, useState } from "react";

function App() {
  const { dispatch, getState, subscribe } = useStore();
  const { counter } = getState();
  const [_, forceUpdate] = useState(0);

  useEffect(() => {
    const dispose = subscribe(() => {
      forceUpdate((_) => _ + 1);
    });

    return dispose;
  }, []);

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
