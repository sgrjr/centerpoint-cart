import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CartItem from '../CartItem'
import CartFooter from '../CartFooter'
import Divider from '@material-ui/core/Divider'
import CartHeader from '../CartHeader'

function CartSingle(props) {
  const id = 'panel' + props.id
  const handleChange = panel => (event, newExpanded) => {
    props.setExpanded(newExpanded ? panel : false)
  }
  const getTotals = (array) => {
    let index = 0
    let totals = {
      price: 0,
      quantity: 0
    }
    array.forEach((item, index) => { 
      totals.price = totals.price + (item.price * item.quantity)
      totals.quantity = totals.quantity + item.quantity
    })
    return totals
  }
  let list

  if (props.items.length == 0) {
    list = <ListItem>No items</ListItem>
  } else {
    list = props.items.map((item, index) => {
      return (<CartItem key={ index } {...item} />)
    })
  }

  return (
    <>
    	<ExpansionPanel expanded={props.expanded === id} onChange={handleChange(id)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CartHeader title={props.title} />
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List>
            {list}
          </List>
        </ExpansionPanelDetails>
        <Divider variant="middle" />
        <CartFooter {...getTotals(props.items)} />
      </ExpansionPanel>
    </>
  )
}

export default CartSingle