import react, { useState } from "react";
import RobotList from '../components/RobotList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll.js';
import data from '../data.json';

function App(){
    const [searchfield, setSearchfield] = useState('') 


    const on_search_change = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredrobots = data.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

        return (
            <>
                <div className="tc">
                    <h1 className="coolfont">ROBOFRIENDS</h1>
                    
                    <SearchBox searchChange={on_search_change}/>
                    <Scroll>
                      <RobotList robots={filteredrobots} />
                    </ Scroll> 
                </div>
            </>
        );
}

export default App;