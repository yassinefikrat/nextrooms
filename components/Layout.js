import AppBar 			from 'material-ui/AppBar'
import Toolbar 			from 'material-ui/Toolbar'
import Typography 		from 'material-ui/Typography'
import Button 			from 'material-ui/Button'
import PropTypes 		from 'prop-types'
import { withStyles } 	from 'material-ui/styles'


import TopBar from '../components/TopBar.js'

import Head from 'next/head'

import Header from './Header'

const styles = {
  root: {
	margin: 10,
	padding: 10,
  },
};

const Layout = (props) => {

	const { classes } = props

	return (
  	<div className={classes.root}>

	  	<Head>
	  		<title>Fortrooms</title>
	  	</Head>

	  	<style jsx global>{`

	  		@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

		    body { 
		        font-family: 'Roboto', sans-serif;
		    }

	    `}</style>

		<TopBar/>
	    
	    {props.children}

  	</div>
	)
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout)