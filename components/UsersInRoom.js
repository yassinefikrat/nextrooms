import Link from 'next/link'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const UsersInRoom = (props) => (
  <MuiThemeProvider>

    <div>

      <p>users</p>

      <ul>
        {props.users.map((user) => (
          <li key={user.name}>
            <Link as={`/p/${user.name}`} href={`/post?name=${user.name}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </div>

  </MuiThemeProvider>
)

export default UsersInRoom