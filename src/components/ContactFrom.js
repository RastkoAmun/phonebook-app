const ContactForm = (props) => {
  return(
    <div>
      <form>
        <div>
          name: <input value={props.name} onChange={props.handleInput}/>
        </div>
        <div>
          <button type='submit' onClick={props.addContact}>add</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;