import React, { useState } from 'react';
import { Button, Space } from 'antd';

function useCounter() {
  const [counter, setCount] = useState<number>(0);
  const decrement = () => counter > 0 && setCount(counter - 1);
  const increment = () => setCount(counter + 1)

  return [counter, decrement, increment] as const;
}

function App() {
  const style = {
    padding: 50
  };

  const [counter, decrement, increment] = useCounter();

  return (
    <div className="App" style={style}>
      <Space>
        <Button type="primary" onClick={decrement}>-</Button>
        <span>{counter}</span>
        <Button type="primary" onClick={increment}>+</Button>
      </Space>
    </div>
  );
}

export default App;
