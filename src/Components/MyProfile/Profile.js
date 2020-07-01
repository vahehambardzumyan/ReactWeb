import React from 'react';
import './Profile.css'
import SideMenu from './sideMenu/SideMenu';
import MainContent from './mainContent/MainContent';
import './Profile.css'
import Addpost from './posts/Addpost/Addpost';


class Profile extends React.Component {

  state = {
    _id: 'hgfhg',
    avatar: 'https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png',
    name: 'Tony Stark',
    email: '',
    data: [
      {
        img: 'https://i.ytimg.com/vi/qLcpE_EV3Ys/maxresdefault.jpg',
        title: 'Malibu, Iron army'
      },
      {
        img: 'https://m.aceshowbiz.com/images/news/robert-downey-jr-changes-mind-on-iron-man-4.jpg',
        title: 'Donts'
      },
      {
        img: 'https://i.insider.com/5ade2f2219ee8651008b467b?width=1100&format=jpeg&auto=webp',
        title: 'With wizards'
      },
      {
        img: 'https://i.pinimg.com/736x/9f/f0/c6/9ff0c6d3a647dd19874bc27fde932424.jpg',
        title: 'Galaxy'
      },
      {
        img: 'https://i.pinimg.com/736x/9f/f0/c6/9ff0c6d3a647dd19874bc27fde932424.jpg',
        title: 'Galaxy'
      },
      {
        img: 'https://i.pinimg.com/736x/9f/f0/c6/9ff0c6d3a647dd19874bc27fde932424.jpg',
        title: 'Galaxy'
      },
      {
        img: 'https://i.pinimg.com/736x/9f/f0/c6/9ff0c6d3a647dd19874bc27fde932424.jpg',
        title: 'Galaxy'
      },
      {
        img: 'https://i.pinimg.com/736x/9f/f0/c6/9ff0c6d3a647dd19874bc27fde932424.jpg',
        title: 'Galaxy'
      },
      {
        img: 'https://i.pinimg.com/736x/9f/f0/c6/9ff0c6d3a647dd19874bc27fde932424.jpg',
        title: 'Galaxy'
      }
    ],
  }



  render() {


    return (
      <div className='Profile'>

        <div className='bgcard'>
          <SideMenu
            name={this.state.name}
            avatar={this.state.avatar} />

            <br/>
            <br/>
            <br/>
            <Addpost />
          
          <MainContent
            data={this.state.data}
            toggle={this.state.open}
            open={this.handleOpen}
            close={this.handleClose}
          />
        </div>

      </div>

    );
  }
}

export default Profile;