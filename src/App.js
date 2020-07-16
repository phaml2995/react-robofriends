import React from 'react';
import './App.css';
import CardList from './component/cardList.component';
import SearchBox from './component/searchBox.component';
import Scroll from './component/Scroll.component';
import { connect } from 'react-redux';
import * as Actions from './redux/actions';
import Header from './component/header.component';


const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(Actions.setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(Actions.requestRobots())
  }
}

class App extends React.Component {
  
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render(){
    const  {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return  isPending ? <h1>Loading</h1> : (
      <div className="App">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
