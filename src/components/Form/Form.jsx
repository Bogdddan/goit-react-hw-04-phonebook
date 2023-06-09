import { useState } from "react";
import css from "./Form.module.css";

export const Form = ({ handleSubmitForm }) => {
// хуки useState
const [name , setName] = useState('');
const [number , setNumber] = useState('');

// функції 
const handleInputChange = event => {
// деструктуризація name , number
const {name , value} = event.target

  switch (name) {
    case 'name':
      setName(value)
      break;
    
      case 'number':
        setNumber(value)
    break;
    default:
      return
  }
};


const onSubmitForm = event => {
  event.preventDefault();

  handleSubmitForm(name , number);
  setName('');
  setNumber('');
};

//яка розмітка повертається
  return (
    <form className={css.form} onSubmit={onSubmitForm}>
      <p>Name</p>
      <div className={css.qwerty}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <p>Number</p>
        <input
          type="text"
          value={number}
          onChange={handleInputChange}
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
}


// class Form extends Component {
  // state = {
  //   name: "",
  //   number: "",
  // };

  // handleInputChange = (e) => {
  //   const { name, value } = e.currentTarget;

  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSubmitForm = (e) => {
  //   e.preventDefault();

  //   const { name, number } = this.state;

  //   this.props.handleSubmitForm(name, number);

  //   this.setState({
  //     name: "",
  //     number: "",
  //   });
  // };

  // render() {
    // const { name, number } = this.state;

    // return (
    //   <form className={css.form} onSubmit={this.handleSubmitForm}>
    //     <p>Name</p>
    //     <div className={css.qwerty}>
    //       <input
    //         type="text"
    //         value={name}
    //         onChange={this.handleInputChange}
    //         name="name"
    //         // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //         required
    //       />
    //       <p>Number</p>
    //       <input
    //         type="text"
    //         value={number}
    //         onChange={this.handleInputChange}
    //         name="number"
    //         // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //         required
    //       />
    //       <button type="submit">Add Contact</button>
    //     </div>
    //   </form>
    // );
  // }
// }


