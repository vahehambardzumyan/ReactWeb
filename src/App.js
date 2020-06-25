import React from 'react'
import Home from './Components/Home/Home'
import Cards from './Components/Cards/Cards'
import { Route } from 'react-router-dom'
import './App.css'
import Auth from './Components/Home/Auth/Auth';

class App extends React.Component {

  state = {

    cardsData: [

      {
        id: '1',
        img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
        title: 'The pulpit rock in Lysefjorden, Norway.',
        avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
        userName: 'David',
        date: '03.06.2020'
      },
      {
        id: '2',
        img: "https://i.pinimg.com/564x/31/14/1c/31141c82ec4fcfc5708805b10d085a8d.jpg",
        title: 'The pulpit rock in Lysefjorden, Norway.',
        avatar: 'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg',
        userName: 'Arthur',
        date: '03.08.2019'
      },
      {
        id: '3',
        img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
        title: 'The pulpit rock in Lysefjorden, Norway.',
        avatar: 'https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art.png',
        userName: 'Arayik',
        date: '15.06.2020'
      }, 
      {
        id: '4',
        img: "https://i.pinimg.com/564x/31/14/1c/31141c82ec4fcfc5708805b10d085a8d.jpg",
        title: 'The pulpit rock in Lysefjorden, Norway.',
        avatar: 'https://webcomicms.net/sites/default/files/clipart/138435/person-icon-138435-6632973.png',
        userName: 'AnubisS',
        date: '11.06.2020'
      },
    ]
  }

  render() {
    return (
      <div className='App'>
          <Route path='/' exact component={Home}/>
          <Route path='/cards' render={() => <Cards cardsData={this.state.cardsData}/>}/>
          <Route path='/auth' render={() => <Auth />}/>

         
      </div>
    )
  }
}

export default App