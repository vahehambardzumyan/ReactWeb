import React from 'react'
import Home from './Components/Home/Home'
import Profile from  './Components/myProfile/Profile.js'
;import Cards from './Components/Cards/Cards'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import Auth from './Components/Auth/Auth';

class App extends React.Component {

  state = {

    cards: [
      {
        id: '1',
        img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
        title: 'The pulpit rock in Lysefjorden, Norway.',
        userId: {
          avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
          userName: 'David',
          _id: 'jsdf'
        },
        date: '03.06.2020'
      },
      {
        id: '1',
        img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
        title: 'The pulpit rock in Lysefjorden, Norway.',
        userId: {
          avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
          userName: 'David',
          _id: 'jsdf'
        },
        date: '03.06.2020'
      },
      {
        id: '1',
        img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
        title: 'The pulpit rock in Lysefjorden, Norway.',
        userId: {
          avatar: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
          userName: 'David',
          _id: 'jsdf'
        },
        date: '03.06.2020'
      },
  ]
}

  render() {
    return (
      <div className='App'>
       <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cards' render={() => <Cards cardsData={this.state.cardsData}/>}/>
          <Route path='/auth' render={() => <Auth />}/>
          <Route path='/myProfile' exact component={Profile} />
       </Switch>
      </div>
    )
  }
}

export default App