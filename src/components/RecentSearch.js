import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class RecentSearch extends Component{
  render(){
    return(
      <React.Fragment>
        <Link to="/">Back</Link>
        <h4>My Recent Search</h4>
        <div>
            <ul>
            {this.props.recentSearch.map( (search, i) => {
              return <li key={i}>{search}</li>
            })}
            </ul>
          </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state){
  return {
    recentSearch: state.recentSearch
  }
}

export default connect( mapStateToProps, null) (RecentSearch);