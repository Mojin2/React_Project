import React, { createContext, useReducer, useContext } from "react";
import { initialState } from "./Reducer";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// Context API를 이용해 전역적으로 사용 할 수 있는 값을 관리
// 이 값은 함수 일수도 있고 외부 라이브러리, DOM일수도 있음
// <사용방법>
// const Context = createContext(initialState);

// Reducer : 현재 상태와 액션 객체를 파라미터로 받아와 새로운 상태로 리턴
// 반화낳는 상태는 컴포넌트가 지닐 새로운 상태
// <사용방법>
// const reducer = (state, action) => {
//     switch (action.type){
//     }
// }
