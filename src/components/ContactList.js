import ContactInfo from './ContactInfo'

const ContactList = ({contacts, deleteContact}) => {

  return(
    <div>
      {contacts.map(contact => 
        <div key={contact.id}>
          <ContactInfo name={contact.name} number={contact.number} id={contact.id} deleteContact={deleteContact}/>
        </div>  
      )}
    </div>
  )
}


export default ContactList;