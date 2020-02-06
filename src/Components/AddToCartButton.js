import React from 'react'
import Button from '@material-ui/core/Button'
import { useSnackbar } from 'notistack'

function AddToCartButton(props) {
	const { enqueueSnackbar } = useSnackbar()
	const action = () => <Button color="primary" onClick={() => props.toggleModalIsOpen(true)}>Change Cart</Button>
  const handleAddToCart = () => { 
  	//@TODO: Update cart state with new cart item
    enqueueSnackbar(`Added to cart: ${props.currentCart}`, {
      variant: 'default',
      autoHideDuration: 3000,
      action
    })
  }
  return <Button onClick={handleAddToCart} >Add to Cart</Button>
}

export default AddToCartButton