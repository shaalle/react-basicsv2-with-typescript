<!-- ------------ Example 1: Typescript React Type Safety Using Props ----------------------------------------- -->

<!-- import React from 'react';
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

export default App; -->

<!-- person component -->

<!-- interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
}
export const Person = (props: Props) => {
    return <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
         {props.friends.map((firend: string) => {
            return <h1>{firend}</h1>
        })} 
       
    </div>
}
 -->

<!-- ------------ Example 2: Typescript Added Enum to the Person Componenet ----------------------------------------- -->

<!-- import React from 'react';
import './App.css';
import {Person, Country} from './components/Person';
function App() {
  return (
    <div className="App"> 
     <Person
      name='Sucdi'
      email='Sucdi@gmail.com'
      age={21}
      isMarried={false}
      friends= {["Salmo", "Nasro", "Jamaal"]} 
      country = {Country.France}/>
    
    </div>
  );
}

export default App; -->

<!-- Person Component -->

<!-- interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: string;
}

export enum Country {
    Brazil= 'Brazil',
    Canada= 'Canada',
    France= 'France',
}
export const Person = (props: Props) => {
    return <div>
        <h1>Name: {props.name}</h1>
        <h1>Email: {props.email}</h1>
        <h1>Age: {props.age}</h1>
        <h1>This person {props.isMarried ? "is" : "is not"} MARRIED</h1>
         {props.friends.map((firend: string) => {
            return <h1>{firend}</h1>
        })} 
        <h1>Country: {props.country}</h1>
       
    </div>
}
 -->


