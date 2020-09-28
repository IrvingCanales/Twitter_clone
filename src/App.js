import React from 'react';

import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed'
import News from './News'

function App() {
  return (
    <div className="App">

      {/*Sidebar */}
     <Sidebar/>


     {/*Feed */ }
     <Feed/>


     {/*News */ }
     <News/>
    </div>
  );
}

export default App;
