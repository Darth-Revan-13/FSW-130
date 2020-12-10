const store = require("./Redux/store")
const action = require("./Redux/action")
console.log(action)

store.dispatch(action.addContact("words"))
store.dispatch(action.addContact("not words"))
store.dispatch(action.removeContact(0))