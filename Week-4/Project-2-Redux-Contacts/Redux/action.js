function addContact (contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function removeContact (id) {
    return {
        type: "REMOVE_CONTACT",
        payload: id
    }
}

module.exports = {
    addContact,
    removeContact
}