import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MoviesResults from './MoviesResults';
import MoviesDetails from './MovieDetails';
import NoMatch from './notFoundPage';
import FavMovies from './FavMovies';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <div className="container">
              <div className="row ">
                <div className="jumbotron text-center">
                    <h1 className="display-3">Movies App!</h1>
                    <p>Search Entertainment</p>
                </div>
              </div>
              <div className="row">
                <Switch>
                  <Route path="/" exact component={MoviesResults}></Route>
                  <Route path="/fav" exact component={FavMovies}></Route>
                  <Route path="/movieDetails" exact component={MoviesDetails}></Route>
                  <Route component={NoMatch} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
