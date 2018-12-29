import React, { Component } from 'react';
import { API_KEY } from '../secrets';
const URLCOMPONENT = 'https://image.tmdb.org/t/p/w342';

class LatestMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      LatestMovie: [],
      updatedData: false
    }
  
    let URL = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`

    fetch(URL,{
      method: 'GET'
    })
    .then(res => res.json())
    .then(jsonObj => {
      debugger;
      this.setState({
        updatedData: true,
        LatestMovie: jsonObj
      })
    })
  }


  showImg(img){
    if(img) {
      return URLCOMPONENT+img
    }else{
      return 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
    }
  }


  render() {
    const record = this.state.LatestMovie;
    return (
      <div className="latest-movie row">
        <h3>Latest Movie</h3>
        <h4>Title - {record.original_title}</h4>
        <img alt={record.original_title} src={this.showImg(record.poster_path)} />
        <h4>Language - {record.original_language}</h4>
        <h4>Status - {record.status}</h4>
      </div>
    );
  }
}



export default LatestMovie;