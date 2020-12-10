const reducer = require("./reducer")
const Redux = require("redux")

const store = Redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})
module.exports = store