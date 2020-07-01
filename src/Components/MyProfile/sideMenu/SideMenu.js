import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import './SideMenu.css'
import { Link } from 'react-router-dom';
import Addpost from '../posts/Addpost/Addpost';

const SideMenu = (props) => {


  return (
    <div className='SideMenu'>
      <div className='AvatarWrap'>
        <Avatar
          className='bgAvatar'
          src={props.avatar}
        />
        <div className='about'>{props.name}</div>
      </div>

  
      
        <div className='SignOut'>
          <ListItem button key='cards' >
            <ListItemIcon>
              <Link to='/cards'>
              <AppsIcon className="icon" />
              </Link>
            </ListItemIcon>
            <ListItemText primary='Cards' style={{color: 'white'}} />
          </ListItem>
          
          
          <ListItem button key='home'>
            <ListItemIcon>
              <Link to='/'>
              <HomeIcon className="icon"  /> 
              </Link>
            </ListItemIcon>
            <ListItemText primary='Home' style={{color: 'white'}}/>
          </ListItem>
         
          
          <ListItem button key='Sign Out' >
            <ListItemIcon>
              <Link to=''>
              <ExitToApp className="icon"  />
              </Link>
            </ListItemIcon>
            <ListItemText primary='Sign Out' style={{color: 'white'}}/>
          </ListItem>
          
       </div> 
       
    </div>
  );
}

export default SideMenu;