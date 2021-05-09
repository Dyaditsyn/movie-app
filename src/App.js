import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ActorsView from './components/ActorsView';
import Actor from './data-models/Actors';
import SearchBox from './components/SearchBox';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      actorsJson: [
        {
            "fName": "Tom",
            "lName": "Hanks",
            "bday": "1956-07-09",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000158"
        },
        {
            "fName": "Tom",
            "lName": "Cruise",
            "bday": "1962-07-03",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000129"
        },
        {
            "fName": "Jennifer",
            "lName": "Lawrence",
            "bday": "1990-08-15",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm2225369"
        },
        {
            "fName": "Tom",
            "lName": "Hanks",
            "bday": "1956-07-09",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000158"
      },
      {
            "fName": "Tom",
            "lName": "Cruise",
            "bday": "1962-07-03",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000129"
        },
        {
            "fName": "Jennifer",
            "lName": "Lawrence",
            "bday": "1990-08-15",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm2225369"
      },    
      {
            "fName": "Tom",
            "lName": "Hanks",
            "bday": "1956-07-09",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000158"
        },
        {
            "fName": "Tom",
            "lName": "Cruise",
            "bday": "1962-07-03",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000129"
        },
        {
            "fName": "Jennifer",
            "lName": "Lawrence",
            "bday": "1990-08-15",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm2225369"
        },
        {
            "fName": "Tom",
            "lName": "Hanks",
            "bday": "1956-07-09",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000158"
        },
        {
            "fName": "Tom",
            "lName": "Cruise",
            "bday": "1962-07-03",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm0000129"
        },
        {
            "fName": "Jennifer",
            "lName": "Lawrence",
            "bday": "1990-08-15",
            "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
            "imdbLink": "https://www.imdb.com/name/nm2225369"
      }
    ],
    searchActor: ''
    }

  }

  handleInput = (e) => {
    this.setState(
      {
        searchActor: e.target.value
      }
    )
  }

  render(){
    const actorsArray = this.state.actorsJson.map((actor) => new Actor(actor.fName, actor.lName, actor.bday, actor.imgUrl, actor.imdbLink));
    
    let filteredActors = actorsArray.filter( (actor) => { 
      const fullName = actor.fName + ' ' + actor.lName;
      return fullName.toLowerCase().includes(this.state.searchActor.toLowerCase() )
    })
    return (
      <div>
        <SearchBox filter={"actors"} handleInput={this.handleInput}/>
        <ActorsView filteredActors ={filteredActors} />
      </div>
    );
  }
}

export default App;
