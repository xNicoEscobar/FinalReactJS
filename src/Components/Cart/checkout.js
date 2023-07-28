import { useRef, useState } from "react";

import classes from "./checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFourChars = (value) => value.trim().length === 4;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        city: true,
        street: true,
        postal: true,
    });

    const nameInputRef = useRef();
    const cityInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isFourChars(enteredPostal);

        setFormInputsValidity({
            name: enteredNameIsValid,
            city: enteredCityIsValid,
            street: enteredCityIsValid,
            postal: enteredPostalIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredCityIsValid &&
            enteredStreetIsValid &&
            enteredPostalIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            city: enteredCity,
            street: enteredStreet,
            postal: enteredPostal,
        });
    };

    const nameControlClasses = `${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`;
    const postalControlClasses = `${classes.control} ${formInputsValidity.postal ? '' : classes.invalid}`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputsValidity.name && (
                    <p>Por favor, ingresa un nombre válido!</p>
                )}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">Ciudad</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputsValidity.name && <p>Por favor, ingresa una ciudad válida!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Dirección</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputsValidity.street && (
                    <p>Por favor, ingresa una dirección válida!</p>
                )}
            </div>
            <div className={postalControlClasses}>
                <label htmlFor="postal">Código postal</label>
                <input type="text" id="postal" ref={postalInputRef} />
                {!formInputsValidity.name && <p>Por favor, ingresa un CP válido!</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancelar
                </button>
                <button className={classes.submit}>Confirmar</button>
            </div>
        </form>
    );
};

export default Checkout;
