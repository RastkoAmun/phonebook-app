import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList'
import serverFunctions from './services/serverService'
import axios from 'axios';

const App = () => {
  const [contacts, setContacts] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const hook = () => {
    serverFunctions.getAll().then(response => {
      setContacts(response.data);
    })
  }
  useEffect(hook, [])

  const searchedContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  //Function for control changing state of form input
  const handleInput = (event) => {
    if(event.target.className === 'name'){
      setNewName(event.target.value)
    }else{
      setNewNumber(event.target.value)
    }
  }

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  //Function for adding a new contact in the list
  const addContact = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName,
      number: newNumber,
    }

    const isFound = contacts.find(contact => 
      contact.name === newName)
    
    if(isFound){
      alert(`${newName} is already in your contacts!`)
      setNewName('')
    }else{
      serverFunctions.insert(newContact).then(response => {
        setContacts(contacts.concat(response.data))
      })
      setNewName('')
      setNewNumber('')
    }
  }

  const deleteContact = (id) => {
    serverFunctions
    .getSpecificContact(id)
    .then(reponse => {
      if(window.confirm(`Delete ${reponse.data.name}`)){
        serverFunctions.deleteContact(id).then(hook)
      }
    });   
  }

  return(
    <div>
      <h1>Phonebook</h1>
      <SearchFilter searchValue={searchValue} handleInput={handleSearchInput} />
      
      <h2>Add Contact</h2>
      <ContactForm nameValue={newName} numberValue={newNumber} addContact={addContact} handleInput={handleInput} />

      <h2>Numbers</h2>
      <ContactList contacts={searchedContacts} deleteContact={deleteContact}/>
      
    </div>
  )
}

export default App;
