const contactState = {contacts: []}

function reducer(state = contactState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return{
                ...state, contacts: state.contacts.concat(
                    action.payload
                ),
            }
        case "REMOVE_CONTACT":
            state.contacts.splice(action.payload, 1)
            return {
                contacts: state.contacts
            }
        default:
            return state
    }
}

module.exports = reducer