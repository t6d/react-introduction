import React, { useReducer } from 'react';
import Checklist, { ChecklistProps } from './components/Checklist';
import reducer, { ChecklistItem } from './reducer';

const defaultChecklistItems: ChecklistProps["items"] = [
  { text: "Test", checked: false },
  { text: "Test 2", checked: true },
]

function App() {
  const [state, dispatch] = useReducer(reducer, {
    items: defaultChecklistItems
  });

  const updateChecklistItem = (item: ChecklistItem, index: number) => dispatch({
    type: "UPDATE_CHECKLIST_ITEM",
    payload: { item, index }
  })

  return (
    <div className="App">
      <Checklist items={state.items} onChange={updateChecklistItem} />
    </div>
  );
}

export default App;
