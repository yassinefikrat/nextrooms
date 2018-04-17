import Link from 'next/link'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'

import UsersInRoom from '../components/UsersInRoom.js'

const style = {
  height: 200,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const RoomThumb = (props) => (
    <MuiThemeProvider>

    	<Paper style={style} zDepth={3} rounded={false}>

    		<h4>{props.room.name}</h4>

    		<UsersInRoom users={props.room.currentUsers}/>

	        <Link as={`/p/${props.room.name}`} href={`/post?name=${props.room.name}`}>
	            <a>{props.room.name}</a>
	    	</Link>

    	</Paper>

    </MuiThemeProvider>
)

export default RoomThumb