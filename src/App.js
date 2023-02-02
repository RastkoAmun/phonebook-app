import { useState } from 'react'
import ContactForm from './components/ContactFrom';

const App = () => {
  const [contacts, setContacts] = useState([
    {name: 'Magnus Carlsen'},
    {name: 'Anish Giri'}
  ])
  const [newName, setNewName] = useState('');

  //Function for control changing state of form input
  const handleInput = (event) => {
    setNewName(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    const newContact = {
      name: newName
    }
    setContacts(contacts.concat(newContact))
    setNewName('')
  }


  return(
    <div>
      <h2>Phonebook</h2>
      {/* <form>
        <div>
          name: <input value={newName} onChange={handleInput}/>
        </div>
        <div>
          <button type='submit' onClick={addContact}>add</button>
        </div>
      </form> */}
      <ContactForm newName={newName} addContact={addContact} handleInput={handleInput} />
        <h2>Numbers</h2>
        <div>
          {contacts.map(contact => 
            <div>{contact.name}</div>
          )}
        </div>
    </div>
  )
}

export default App;
