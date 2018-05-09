import React from "react"

import Link from "next/link"

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import createMuiTheme from "material-ui/styles/createMuiTheme"

import Paper from "material-ui/Paper"
import TextField from "material-ui/TextField"
import MenuItem from "material-ui/Menu/MenuItem"
import Button from "material-ui/Button"
import green from "material-ui/colors/green"

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: "center",
  display: "inline-block",
  background: "lightGreen"
}

const theme = createMuiTheme({
  palette: {
    primary: green
  }
})

class NewRoom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: props.games[0] || "Fortnite",
      size: props.sizes[0] || "4 players"
    }
    this.games = props.games
    this.sizes = props.sizes
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Paper style={style} zDepth={3} rounded={false}>
          <h3>Create a room</h3>

          <TextField label="Room name" id="room-name" />

          <TextField
            select
            label="Game"
            id="select-game"
            margin="normal"
            value={this.games[0]}
            onChange={this.handleChange("game")}
          >
            {this.games.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Size"
            id="select-size"
            margin="normal"
            value={this.sizes[0] ? this.sizes[0] : "4 players"}
            onChange={this.handleChange("size")}
          >
            {this.sizes.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          <Button onClick={console.log("lel")} variant="raised" color="primary">
            OK
          </Button>
        </Paper>
      </MuiThemeProvider>
    )
  }
}

// const NewRoom = (props) => (

//     <MuiThemeProvider theme={theme}>

//      <Paper style={style} zDepth={3} rounded={false}>

//        <h3>Create a room</h3>

//         <TextField
//           label="Room name"
//           id="room-name"
//         />

//         <TextField
//           select
//           label="Game"
//           id="select-game"
//           margin="normal"
//           value={props.games}
//         />

//      </Paper>

//     </MuiThemeProvider>

// )

export default NewRoom
