import React from 'react';

const TestComponent: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p data-testid="counterNum">{count}</p>
      <button data-testid="incButton" onClick={() => setCount(count + 1)}>
        Inc
      </button>
      <button data-testid="decButton" onClick={() => setCount(count - 1)}>
        Dec
      </button>
    </div>
  );
};

export default TestComponent;
