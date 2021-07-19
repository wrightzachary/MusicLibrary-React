import React, { Component } from 'react';
import SongTable from './Components/SongTable/SongTable';
import axios from 'axios';
import CreateSong from './Components/CreateSong/CreateSong';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }

    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        console.log(response.data)
        this.setState({
            songs: response.data
        });
    }

    // componentDidMount(){
    //     axios.get('http://127.0.0.1:8000/music/')
    //     .then(response => this.setState({
    //         songs: response.data
    //     }));
    // }

    addNewSong(song){
        this.setState({
            songs: [...this.state.songs, song]
        });
        console.log('test', this.state.songs)
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