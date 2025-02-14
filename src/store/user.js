import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit/react";

export const userAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

const initialState = userAdapter.getInitialState({ loading: false }, [
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
]);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdded: userAdapter.addOne,
    userRemove: userAdapter.removeOne,
    userUpdate: userAdapter.updateOne,
  },
});
