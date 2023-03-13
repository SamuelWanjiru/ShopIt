import React from 'react'
import './Navbar.scss'
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpIcon from '@mui/icons-material/Help';
import moment from 'moment'
import Help from '@mui/icons-material/Help';

const Navbar = () => {

    const current_time = moment().format("hh:mm a,Do MMMM")

  return (
    <div className='navbar'>
    <div className="wrapper"> 

    <div style={{marginLeft:'5px'}}>
    <span style={{border:'1px solid black',borderRadius:'50%',
    padding:'5px 5px',backgroundColor:'white',color:'black'}}>SM</span>
   
    </div>

    <div className='SearchProduct'>
        <input 
            placeholder='Search products, brands...'
        /> 
        <button className='SearchButton'>Search</button>
    </div>

    <div className="items">

    <div className="item">
        {current_time}
    </div>

    <div className='item'>
        <HelpIcon />
    </div>
    
    <div className="item">
      <DarkModeOutlinedIcon
        className="icon"
      />
    </div>

    <div className='item'>

        <ShoppingCartIcon 
            className='icon'
        />
        <div className="counter">0</div>

    </div>

    <div className='item'>
        <button 
        style={{padding:'3px',fontFamily:'sans-serif',
        borderRadius:'5px',color:'white',backgroundColor:'#ff9900',
        fontWeight:'bold',border:'1px transparent'}}
        >   
        Sam Wanjiru
        <br/> 
        </button> 
    </div>


    </div>

    </div>
    </div>
  )
}

export default Navbar;