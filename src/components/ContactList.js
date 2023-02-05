import ContactInfo from './ContactInfo'

const ContactList = ({contacts}) => {
  return(
    <div>
      {contacts.map(contact => 
        <div key={contact.id}>
          <ContactInfo name={contact.name} number={contact.number} />
        </div>  
      )}
    </div>
  )
}


export default ContactList;