import React from 'react';
import Link from 'next/link'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const UsersInRoom = (props) => (
  <MuiThemeProvider>

    <div>

      <ul>
        {props.users.map((user) => (
          <li key={user}>
              <a>{user}</a>
          </li>
        ))}
      </ul>

    </div>

  </MuiThemeProvider>
)

export default UsersInRoom