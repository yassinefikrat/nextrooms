import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemText,
  ListItemIcon
} from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const SmallUsersList = (props) => {

	const { classes } = props

	return (
	  <div>
          
          <List dense="false">

			{[...Array(props.maxUsers)].map((x, i) => (

				<Paper zDepth={0}>

					{props.users[i] ? 
							(<ListItem>
					            <ListItemIcon>
				              		<PersonOutlineIcon />
					            </ListItemIcon>
			                	<ListItemText
			                    	key={i}
			                      	primary={props.users[i]}
			                	/>
			              	</ListItem>)
		              	:
			              	(<ListItem button>
					            <ListItemIcon>
				              		<PersonAddIcon />
					            </ListItemIcon>
			                	<ListItemText
			                    	key={i}
			                      	primary="join"
			                	/>
			              	</ListItem>)
	              	}

				</Paper>
		    ))}

          </List>

	  </div>
	);
}

export default(SmallUsersList);
