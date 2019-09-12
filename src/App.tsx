import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h3>path = </h3>
      <h4>{process.env.REACT_APP_DOC_TITLE}</h4>
      <h4>{JSON.stringify(process.env)}</h4>

    </div>
  );
}

export default App;
