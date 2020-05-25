import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './component/cardList.component';
import SearchBox from './component/searchBox.component';
import Scroll from './component/Scroll.component';

function App() {
  const [robot, setRobot] = useState([]);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robot.filter(r => {
    return r.name.toLowerCase().includes(searchField.toLowerCase());
  })

  const fetchData = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await result.json();
    setRobot(response);
  }

  useEffect(() => {
    fetchData();
  }, [searchField])


  return (
    <div className="App">
      <h1 className="f1 ma3">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
}

export default App;
