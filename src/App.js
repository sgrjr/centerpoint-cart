import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import ClearIcon from '@material-ui/icons/Clear'
import AddIcon from '@material-ui/icons/Add'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import Typography from '@material-ui/core/Typography'
import CartList from './Components/CartList'
import './App.css'
import whoseBody from './Img/whose-body.jpg'
import nineTailors from './Img/nine-tailors.jpg'
import { SnackbarProvider } from 'notistack'
import AddToCartButton from './Components/AddToCartButton'
import CartListModal from './Components/CartListModal'

function App() {
  const myCarts =  [{
    title: 'Cart 1',
    items: [{
      title: 'Whose Body?',
      author: 'Dorothy L. Sayers',
      itemUrl: '/',
      price: 3.99,
      quantity: 1,
      isbn: 9780061043574,
      img: whoseBody
    },
    {
      title: 'The Nine Tailors',
      author: 'Dorothy L. Sayers',
      itemUrl: '/',
      price: 3.95,
      quantity: 2,
      isbn: 9780151658978,
      img: nineTailors
    }]
  },
  {
    title: 'Cart 2',
    items: [{
      title: 'Whose Body?',
      author: 'Dorothy L. Sayers',
      itemUrl: '/',
      price: 3.99,
      quantity: 1,
      isbn: 9780061043574,
      img: whoseBody
    },
    {
      title: 'The Nine Tailors',
      author: 'Dorothy L. Sayers',
      itemUrl: '/',
      price: 3.95,
      quantity: 1,
      isbn: 9780151658978,
      img: nineTailors
    }]
  },
  {
    title: 'Cart 3',
    items: []
  }]
  
  const [carts] = useState(myCarts)
  const [currentCart] = useState('Cart 1')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [modalIsOpen, toggleModalIsOpen] = useState(false)
  const handleDrawerOpen = () => {
    setDrawerOpen(drawerOpen === true ? false: true)
  }
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton 
              edge="start" 
              aria-label="cart"
              onClick={handleDrawerOpen}
            >
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <Typography variant="h6">
              Centerpoint
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={drawerOpen} onClose={handleDrawerOpen}>
          <Button 
            onClick={handleDrawerOpen}
            startIcon={<ClearIcon />}
          >
            Close
          </Button>
          <CartList carts={carts} />
          <Button endIcon={<AddIcon />}>
            Create New Cart
          </Button> 
        </Drawer>
        <AddToCartButton 
          toggleModalIsOpen={toggleModalIsOpen} 
          currentCart={currentCart}
        />
        <CartListModal 
          open={modalIsOpen} 
          handleClose={toggleModalIsOpen} 
          carts={carts} 
        />
      </div>
    </SnackbarProvider>
  )
}

export default App;
