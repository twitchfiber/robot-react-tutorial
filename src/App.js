import React from 'react';
import CardList from './CardList'
import { robots } from './robots';
import SearchBox from './SearchBox'

// STATE >> props
class App extends React.Component {
    constructor(props) {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={ filteredRobots } />
            </div>
        );
    }
}

export default App;