import deepFreeze from "deep-freeze";
import anecdoteReducer, { initialState } from "./anecdoteReducer";

describe("anecdoteReducer()", () => {
  test("returns initial state when initialized with undefined state", () => {
    const action = {
      type: "DO_NOTHING",
    };
    const newState = anecdoteReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test("increments votes of the given anecdote", () => {
    const action = {
      type: "VOTE",
      id: initialState[0].id,
    };
    const state = initialState;

    deepFreeze(state);
    const newState = anecdoteReducer(state, action);
    expect(newState).toContainEqual({
      ...initialState[0],
      votes: initialState[0].votes + 1,
    });
  });
});
