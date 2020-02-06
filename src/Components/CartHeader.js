import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import CreateIcon from '@material-ui/icons/Create'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	heading: {
		lineHeight: '1',
		paddingTop: '8px',
		paddingBottom: '8px'
	},
	icon: {
		lineHeight: '1',
		marginLeft: '.5rem',
		'& svg': {
			fontSize: '1rem'
		}
	},
	field: {
		'& input': {
			paddingTop: '6px'
		}
	}
})

function CartHeader(props) {
  const classes = useStyles()
  let [editable, setEditable] = useState(false)

  const handleClick = (e) => {
    setEditable(editable === true ? false: true)
    e.stopPropagation();
  }

	let title
	if (editable) {
		//@TODO: Create onChange function to set name change to state
		title = <>
			<TextField 
				className={classes.field}
				defaultValue={props.title} 
				onClick={(e) => e.stopPropagation()} 
				onBlur={handleClick}
				onKeyPress={event => {
          if (event.key === 'Enter') {
            handleClick(event)
          }
        }}
        autoFocus
			/>
			<Button onClick={handleClick} size="small">Save</Button>
		</>
	} else {
		title = <>
			<Typography className={classes.heading}>{props.title}</Typography>
			<IconButton 
				className={classes.icon}
				aria-label="edit title" 
				onClick={handleClick}
				size="small"
			>
			  <CreateIcon />
			</IconButton>
		</>
	}

  return (
    <>
    	{title}
    </>
  )
}

export default CartHeader

