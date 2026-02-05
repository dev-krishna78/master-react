// var h1 = React.createElement('h1',null,'hello krishna')
// var h2 = React.createElement('h2',null,'hello boss ')

// var div = React.createElement('div',null,[h1,h2])

// var root = ReactDOM.createRoot(document.querySelector('#container'))

// root.render(div);

import parent from './parent.js'
const root = ReactDOM.createRoot(document.querySelector("#container"))

root.render(parent())