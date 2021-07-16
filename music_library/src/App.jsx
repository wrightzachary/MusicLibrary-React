import React, { Component } from 'react';
import SongTable from './Components/SongTable/SongTable';
import axios from 'axios';
import CreateSong from './Components/CreateSong/CreateSong';

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

    addNewSong(song){
        this.songs.push(song);
        this.setState({
            songNumber: this.songs.length -1
        });
        console.log('test', this.state.title)
    }

    render() { 
        return ( 
            <React.Fragment>
                <SongTable songs={this.state.songs}/>
                <CreateSong addNewSong={this.addNewSong.bind(this)} />
            </React.Fragment>
         );
    }
}
 
export default App;