import React from "react";
import { increment, incrementSync } from "./store/reducers";
import { useSelector, useDispatch } from "react-redux";
import { userAdapter, userSlice } from "./store/user";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementSync())}>Increment Sync</button>
      <button
        onClick={() =>
          dispatch(userSlice.actions.userAdded({ id: 3, name: "hhh" }))
        }
      >
        add hhh
      </button>
      <User />
    </div>
  );
}

const User = () => {
  const users = useSelector(userAdapter.getSelectors(state=>state.user).selectAll);
  console.log(users);

  return (
    <ul>
      {users.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default App;
