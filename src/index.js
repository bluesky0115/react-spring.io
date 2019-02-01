import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import './reset.css'
import './styles.css'
import * as serviceWorker from './service-worker'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
