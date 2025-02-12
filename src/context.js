import React, { useContext } from 'react';

export const ReduxContext = React.createContext(null);

export const useStore = ()=>useContext(ReduxContext);