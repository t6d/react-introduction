import React, { useState } from 'react';
import ChecklistItem from './components/ChecklistItem';

function App() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="App">
      <ChecklistItem checked={checked} onChange={setChecked}>Test</ChecklistItem>
    </div>
  );
}

export default App;
