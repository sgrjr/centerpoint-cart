import React from 'react'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'

const fontSize = '.8rem'
const colorAccent = grey[600]
const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'minmax(auto, 80px) 1fr auto',
    gridColumnGap: '10px',
    gridRowGap: '5px',
    minWidth: '30vw'
  },
  title: {
  	fontSize: '1rem',
  	gridColumn: 'span 2',
  	fontWeight: 'bold'
  },
  author: {
  	gridColumn: 'span 2',
  	fontSize: fontSize,
  	color: colorAccent,
    lineHeight: '1.2'
  },
  priceLabel: {
  	fontSize: fontSize,
  	color: colorAccent,
  	justifySelf: 'right',
    lineHeight: '1.2'
  },
  price: {
  	fontSize: fontSize,
  	color: colorAccent,
  	lineHeight: '1.2'
  },
  quantity: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	marginTop: '-5px'
  },
  quantityLabel: {
  	fontSize: fontSize,
  	color: colorAccent,
  	justifySelf: 'right',
  	alignSelf: 'start',
  	lineHeight: '1.2'
  },
  quantitySelect: {
  	marginTop: '0 !important',
  	fontSize: fontSize
  },
  imageContainer: {
  	gridRow: '1 / span 5'
  },
  image: {
  	width: '100%'
  },
  remove: {
  	justifySelf: 'end'
  },
  total: {
  	fontWeight: 'bold',
  	fontSize: fontSize,
  	lineHeight: '1.2'
  }
})

function CartItem(props) {
	const classes = useStyles()
  //@TODO: Add function to update Quantity state on quantity select change
  return (
    <ListItem className={classes.container}>
    	<div className={classes.imageContainer}>
    		<img className={classes.image} src={props.img} alt={`${props.title} cover`}/>
    	</div>
    	<Typography variant="h3" className={classes.title}>{props.title}</Typography>
    	<Typography className={classes.author}>By {props.author}</Typography>
    	<Typography className={classes.priceLabel}>Item price: </Typography>
    	<Typography className={classes.price}>${props.price}</Typography>
    	<label className={classes.quantityLabel}>Quantity: </label>
    	<FormControl className={classes.quantity}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id={'quantity'}
          value={props.quantity}
          className={classes.quantitySelect}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      <Button
      	variant="outlined" 
      	size="small"
      	className={classes.remove}
      >
      	Remove
      </Button>
      <Typography className={classes.total}>{`$${(props.quantity * props.price).toFixed(2)}`}</Typography>
    </ListItem>
  )
}

export default CartItem