import React from 'react'
import CartSingle from '../CartSingle'

function CartList(props) {
	const [expanded, setExpanded] = React.useState(undefined);

  return (
    <>
    	{props.carts.map((cart, index) => <CartSingle key={ index } id={index} {...cart} expanded={expanded} setExpanded={setExpanded} />)}
    </>
  )
}

export default CartList