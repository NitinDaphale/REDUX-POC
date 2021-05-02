const defaultState = {
  toDos: [
    {
      name: "Program",
      id: 0
    }
  ]
};

function rootReducer(state = defaultState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        toDos: [
          ...state.toDos,
          { name: action.payload, id: state.toDos.length }
        ]
      };
    default:
      return state;
  }
}

export default rootReducer;
