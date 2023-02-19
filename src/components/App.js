import React from 'react';
import './App.css';
import Header from "./header";
import AddContact from "./AddContact";
import ContactList from "./ContactList" ;
function App() {
  // Now implementing the funcionality to add number
  const contacts = [
    {
      id : "1" ,
      name : "raghuvamsi",
      email : "raghuvamsiarv@gmail.com"
    },
    {
      id : "2" ,
      name : "venky",
      email : "venky@gmail.com"
    }
  ]

  return (
    <div className='ui container '>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />    
    </div>
  );
}

export default App;
