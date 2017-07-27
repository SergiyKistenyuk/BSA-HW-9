import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import UserApp from './components/usersApp'

render(
    (<UserApp />), document.getElementById('root')
);
