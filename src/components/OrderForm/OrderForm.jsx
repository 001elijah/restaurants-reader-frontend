import { useState } from "react";

import css from './OrderForm.module.css'
import { ToastContainer } from "react-toastify";

export const OrderForm = ({ handleSubmitOrder, cart, setCart, handleAmountChange }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const handleRemove = (productId) => {
        setCart(cart => cart.filter(item => item._id !== productId));
    };

    const price = cart.reduce((total, item) => total + item.amount * item.price, 0);

    const handleChange = evt => {
        evt.target.name === 'name' && setName(evt.target.value);
        evt.target.name === 'email' && setEmail(evt.target.value);
        evt.target.name === 'number' && setNumber(evt.target.value);
        evt.target.name === 'address' && setAddress(evt.target.value);
    };

    const reset = () => {
        setName('');
        setEmail('');
        setNumber('');
        setAddress('');
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        handleSubmitOrder({ name, email, phone: number, address, order: cart, total: price });
        // onSubmitProp({name, email, number, address, amount, id: shortid.generate()});
        reset();
        setCart([]);
    };

    return (
        <>
            <ToastContainer />
            {cart.length > 0 &&
                <form onSubmit={handleSubmit}>
                <div style={{padding: '0 35px', margin: "0 auto"}}>
                    <div className={css.FormWrapper}>
                        <ul>
                            <li>
                                <label htmlFor="">
                                    Name:<br />
                                    <input
                                        type="text"
                                        name="name"
                                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                        title="Name may contain only letters, apostrophe, dash and spacecs For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                        required
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </label><br /><br />
                            </li>
                            <li>
                                <label htmlFor="">
                                    Email:<br />
                                    <input
                                        type="text"
                                        name="email"
                                        // pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
                                        title="Email"
                                        required
                                        value={email}
                                        onChange={handleChange}
                                    />
                                </label><br /><br />
                            </li>
                            <li>
                                <label htmlFor="">
                                    Phone:<br />
                                    <input
                                        type="tel"
                                        name="number"
                                        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                        required
                                        value={number}
                                        onChange={handleChange}
                                    />
                                </label><br /><br />
                            </li>
                            <li>
                                <label htmlFor="">
                                    Address:<br />
                                    <input
                                        type="text"
                                        name="address"
                                        // pattern="\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\."
                                        title="Address"
                                        required
                                        value={address}
                                        onChange={handleChange}
                                    />
                                </label><br /><br />
                            </li>
                        </ul>
                        <ul className={css.OrderList}>
                            {cart.map(item =>
                                <li className={css.OrderCard} key={item._id}>
                                    <img className={css.OrderPic} src={item.photo} alt="" />
                                    <div className={css.TextWrapper}>
                                        <p>{item.title}</p>
                                        <p>Price: {item.price}</p>
                                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                                                    <button className={css.Button} type="button" onClick={() => handleAmountChange(item._id, 1)}>+</button>
                                                    <p className={css.Amount}>{item.amount}</p>
                                                    <button className={css.Button} type="button" onClick={() => handleAmountChange(item._id, -1)}>-</button>
                                                </div>
                                            <button className={css.RemoveButton} onClick={() => handleRemove(item._id)}>Remove</button>
                                    </div>
                                </li>)}
                        </ul>
                    </div>
                    <div className={css.FlexWrapper}>
                        <p className={css.Total}>Total price: {price}</p>
                        <button className={css.SubmitButton} type="submit">Submit order</button>
                    </div>
                </div>
            </form>}
            {cart.length === 0 && <p>You cart is empty! Go shopping first</p>}
        </>
    );
};