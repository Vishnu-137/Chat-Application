// import React from "react";
// import ReactDOM  from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById('root'));


// import { createRoot } from 'react-dom/client';
// import App from './App';

// // Replace ReactDOM.render with createRoot
// createRoot(document.getElementById('root')).render(<App />);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);