import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      App
    </div>
  )
}

Meteor.startup(function () {
  ReactDOM.render(<App />, document.querySelector('#app'))
})
