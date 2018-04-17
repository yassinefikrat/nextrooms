import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme 		from 'material-ui/styles/getMuiTheme'
import {green100, green500, green700} from 'material-ui/styles/colors'
import AppBar 			from 'material-ui/AppBar'
import FlatButton 		from 'material-ui/FlatButton'

import Head from 'next/head'

import Header from './Header'

const layoutStyle = {
  margin: 10,
  padding: 10,
  // border: '1px solid #DDD'
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    primary3Color: green100,
  },
}, {
  avatar: {
    borderColor: null,
  },
  // userAgent: req.headers['user-agent'],
});

const Layout = (props) => (
  	<div style={layoutStyle}>

	  	<Head>
	  		<title>Fortrooms</title>
	  	</Head>

	  	<style jsx global>{`

	  		@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

		    body { 
		        font-family: 'Roboto', sans-serif;
		    }

	    `}</style>

	    <MuiThemeProvider muiTheme={muiTheme}>

	    	<AppBar
			    title="Fortrooms"
			    iconElementRight={<FlatButton label="Settings" />}
			/>

	    </MuiThemeProvider>
	    
	    {props.children}

  	</div>
)

export default Layout