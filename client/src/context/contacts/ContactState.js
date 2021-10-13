import React, { useReducer } from "react";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {ADD_CONTACT,
SET_CURRENT,
DELETE_CONTACT,
CLEAR_CURRENT,
UPDATE_CONTACT,
FILTER_CONTACTS,
CLEAR_FILTER} from '../types';

const uuid = require('uuid');

const ContactState = props => {
    const initialState = {
        contacts: [
            
                {
                    "id": 1,
                    "name": "Ted",
                    "email": "ted@gmail.com",
                    "phone": "222-222-2222",
                    "type": "personal"
                },
                {
                    "id": 2,
                    "name": "aish",
                    "email": "aish@gmail.com",
                    "phone": "9876543210",
                    "type": "professional"
                }
            
        ],
        current: null,
        filtered: null
    };

const [state, dispatch] = useReducer(contactReducer, initialState);

//Add contact

const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact}); 
};

//Delete contact

const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id}); 
};

//Set current contact

const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact}); 
};

// Clear current contact

const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT}); 
};

//Update contact

const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact}); 
};

//Filter contacts

const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text}); 
};

//clear filter

const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER}); 
};


return (
    <contactContext.Provider 
    value={{
    contacts : state.contacts,
    current: state.current,
    filtered: state.filtered,
    addContact,
    deleteContact,
    setCurrent,
    clearCurrent,
    updateContact,
    filterContacts,
    clearFilter
    }}>
        {props.children}
    </contactContext.Provider>
)


};

export default ContactState;