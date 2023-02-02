import { useState } from 'react'
import ContactForm from './components/ContactFrom';

const App = () => {
  const [contacts, setContacts] = useState([
    {name: 'Magnus Carlsen', number: '236-455-8776'},
    {name: 'Anish Giri', number: '665-009-2341'},
    {name: 'Hikaru Nakamura', number: '778-665-1157'}
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const searchedContacts = contacts.filter((contact) => 
  {
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
      number: newNumber
    }

    const isFound = contacts.find(contact => 
      contact.name === newName)
    
    if(isFound){
      alert(`${newName} is already in your contacts!`)
      setNewName('')
    }else{
      setContacts(contacts.concat(newContact))
      setNewName('')
      setNewNumber('')
    }
  }

  return(
    <div>
      <h1>Phonebook</h1>
      <div>Search: <input value={searchValue} onChange={handleSearchInput}/></div>
      
      <h2>Add Contact</h2>
      <ContactForm nameValue={newName} numberValue={newNumber} addContact={addContact} handleInput={handleInput} />
        <h2>Numbers</h2>
        <div>
          {searchedContacts.map(contact => 
            <div key={contact.name}>{contact.name}: {contact.number}</div>
          )}
        </div>
    </div>
  )
}

export default App;
