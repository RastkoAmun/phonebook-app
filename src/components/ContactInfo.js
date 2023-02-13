const ContactInfo = ({name, number, deleteContact, id}) => {
  return(
    <div>{name}: {number} <button onClick={() => deleteContact(id)}> Delete </button></div>
  )
}

export default ContactInfo;