import React, { useState } from 'react';
import Checklist, { ChecklistProps } from './components/Checklist';

const defaultChecklistItems: ChecklistProps["items"] = [
  { text: "Test", checked: false },
  { text: "Test 2", checked: true },
]

function App() {
  const [checklistItems, setChecklistItems] = useState(defaultChecklistItems);
  const updateChecklistItem: ChecklistProps["onChange"] = (item, index) => {
    setChecklistItems([...checklistItems].fill(item, index, index + 1));
  };

  return (
    <div className="App">
      <Checklist items={checklistItems} onChange={updateChecklistItem} />
    </div>
  );
}

export default App;
