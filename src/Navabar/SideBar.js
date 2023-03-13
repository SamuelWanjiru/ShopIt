import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import './SideBar.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopIcon from '@mui/icons-material/Laptop';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SportsIcon from '@mui/icons-material/Sports';


export const SideBar = () => {

   
  return (
    <div className='sidebar'>

      <div className="top">
        <span className="logo" 
        style={{textDecoration:'none',textDecorationColor:'grey',textDecorationThickness:'3px',fontFamily:"sans-serif"}}> 
          ShopIt <AddShoppingCartIcon style={{position:'absolute',paddingLeft:'5px',color:'#ff9900'}} />
        </span>
    </div>
    <hr style={{display:'none'}}/>

    <div className="center">
      <ul>
          <li>
            <StorefrontIcon className="icon" />
            <span>Supermarket</span>
          </li>

          <li>
          <FitnessCenterIcon className="icon" />
          <span>Health & Beauty</span>
          </li>

          <li>
          <HomeWorkIcon className="icon" />
          <span>Home & Office</span>
          </li>

          <li>
          <KitchenIcon className="icon" />
          <span>Appliances</span>
          </li>

          <li>
          <PhoneIphoneIcon className="icon" />
          <span>Phoes & Tablets</span>
          </li>

          <li>
          <LaptopIcon className="icon" />
          <span>Computing</span>
          </li>

          <li>
          <LiveTvIcon className="icon" />
          <span>TVs & Audio</span>
          </li>

          <li>
          <CheckroomIcon className="icon" />
          <span>Fashion</span>
          </li>

          <li>
          <SportsEsportsIcon className="icon" />
          <span>Gaming</span>
          </li>

          <li>
          <ChildCareIcon className="icon" />
          <span>Baby Products</span>
          </li>

          <li>
          <SportsIcon className="icon" />
          <span>Sporting Goods</span>
          </li>

          <li>
          <DashboardIcon className="icon" />
          <span>Other Categories</span>
          </li>
       
       
      </ul>
    </div>

  </div>
  )
}
