const ContactForm = (props) => {
  return(
    <div>
      <form>
        <div>
          Name: <input className='name' value={props.nameValue} onChange={props.handleInput}/>
        </div>
        <div>
          Number: <input className='number' value={props.numberValue} onChange={props.handleInput}/>
        </div>
        <div>
          <button type='submit' onClick={props.addContact}>Add Contact</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;