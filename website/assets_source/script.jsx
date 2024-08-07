// TODO: Imports all components and renders them in index file
import React from 'react';
// import { createRoot } from 'react-dom/client';

// // Clear the existing HTML content
// document.body.innerHTML = '<div id="app"></div>';

// // Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world from react</h1>);

import { createRoot } from 'react-dom/client';

function Test() {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
}

export default Test;

const domNode = document.getElementById("test");
const root = createRoot(domNode);
root.render(<Test />);