import reducer, { AppState } from './reducer';

test("updating a checklist item", () => {
  const initialState: AppState = {
    items: [
      {
        text: "Hello World!",
        checked: false
      }
    ]
  }

  const newState = reducer(initialState, {
    type: "UPDATE_CHECKLIST_ITEM",
    payload: {
      index: 0,
      item: {
        text: "Hello World!",
        checked: true
      }
    }
  });

  expect(newState.items[0].checked).toBe(true);
})
