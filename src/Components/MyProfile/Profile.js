import React from 'react';
import './Profile.css'

class Profile extends React.Component {

    state = {
        _id: 'hgfhg',
        avatar: 'https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png',
        name: 'Tathev',
        email: '',
        data: [
          {
            img: 'https://c4.wallpaperflare.com/wallpaper/549/983/593/google-material-style-digital-art-android-l-wallpaper-preview.jpg',
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
  
        </div>
      )
    }
  }
  
  export default Profile;