import React from 'react'
import Home from './Components/Home/Home'
import Cards from './Components/Cards/Cards'
import { Route } from 'react-router-dom'
import './App.css'
import Auth from './Components/Home/Auth/Auth';

class App extends React.Component {

  state = {

    cards: [
      {
        id: '1',
        img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
      },
      {
        id: '2',
        img: "https://i.pinimg.com/564x/31/14/1c/31141c82ec4fcfc5708805b10d085a8d.jpg",

      },
      {
        id: '3',
        img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",

      }, {
        id: '4',
        img: "https://i.pinimg.com/564x/31/14/1c/31141c82ec4fcfc5708805b10d085a8d.jpg",
      },
      {
        id: '5',
        img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
      },
     {
      id: '6',
      img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
    },
    {
      id: '7',
      img: "https://i.pinimg.com/originals/32/d9/93/32d993ba260c6bcbb7cd5fd77347fad1.gif",
    },
    {
      id: '8',
      img: "https://i.pinimg.com/564x/71/93/d7/7193d7a5d5220eb16ff6d6d87ff30bb1.jpg",
    },
    {
      id: '9',
      img: "https://i.pinimg.com/564x/ee/04/48/ee0448bc62eeed7aeff5fe2882a31e53.jpg",

    }
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