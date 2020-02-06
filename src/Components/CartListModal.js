import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { useSnackbar } from 'notistack'

function CartListModal(props) {
  const { enqueueSnackbar } = useSnackbar()
  const handleClick = (e, title) => {
    //@TODO: Move items to selected cart
    props.handleClose(false)
    enqueueSnackbar(`Moved to cart: ${title}`, {
      variant: 'default',
      autoHideDuration: 3000
    })
  }
  return (
    <Dialog aria-labelledby="simple-dialog-title" onClose={() => props.handleClose(false)} open={props.open}>
      <DialogTitle id="simple-dialog-title">Move Item to Different Cart</DialogTitle>
      <List>
        {props.carts.map((cart, index) =>(
          <ListItem  
            key={ index } 
            onClick={e => handleClick(e, cart.title)}
            button
          >
            {cart.title}
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}

export default CartListModal