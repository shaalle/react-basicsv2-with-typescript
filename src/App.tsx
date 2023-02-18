import React from 'react';
import './App.css';
import {Person} from './components/Person';
function App() {
  return (
    <div className="App"> 
     <Person
      name='Sucdi'
      email='Sucdi@gmail.com'
      age={21}
      isMarried={false}
      friends= {["Salmo", "Nasro", "Jamaal"]} />
    
    </div>
  );
}

export default App;
