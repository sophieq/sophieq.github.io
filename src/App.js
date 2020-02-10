import React from 'react';
import Home from './pages/Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown)

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
