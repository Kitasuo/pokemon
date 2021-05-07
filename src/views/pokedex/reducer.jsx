export const reducer = (state, action) => {
  if (action.type === "CHANGE_POKEID") {
    return { ...state, pokeId: Math.floor(Math.random() * (898 - 1) + 1) };
  }
  if (action.type === "APPLY_WOBBLE") {
    return { ...state, wobble: 1 };
  }

  if (action.type === "REMOVE_WOBBLE") {
    return { ...state, wobble: 0 };
  }
};
