import React, { Component } from 'react';
import SongTable from './Components/SongTable/SongTable';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [
                {
                    id: 1,
                    title: "All Eyes On Me",
                    artist: "Bo Burnham",
                    album: "Inside (The Songs)",
                    release_date: "2021-06-10T00:00:00Z"
                },
                {
                    id: 2,
                    title: "Africa",
                    artist: "Toto",
                    album: "Toto IV",
                    release_date: "1982-04-08T00:00:00Z"
                },
            ]
         }
    }

    // componentDidMount(){
    //     this.getAllSongs();
    // }

    // async getAllSongs(){
    //     let response = await axios.get('http://127.0.0.1:3306/music/');
    //     this.setState({
    //         songs: response.data
    //     });
    // }

    render() { 
        return ( 
            <SongTable songs={this.state.songs}/>
         );
    }
}
 
export default App;