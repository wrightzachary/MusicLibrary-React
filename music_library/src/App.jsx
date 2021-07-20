import React, { Component } from 'react';
import SongTable from './Components/SongTable/SongTable.jsx';
import axios from 'axios';
import CreateSong from './Components/CreateSong/CreateSong';
import FilterSearch from './Components/FilterSearch/FilterSearch';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [], 
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

    async deleteSong(id){
        console.log("deleteSong", id)
            await axios.delete(`http://127.0.0.1:8000/music/${id}/`);
            this.songId = this.id;
            this.getAllSongs()
    }

    async addNewSong(song){
        console.log(song)
        try{
            let response = await axios.post('http://127.0.0.1:8000/music/', song);
            // console.log(response.data)
            // alert('Song Added!')
            this.setState({
                song:response.data
            });
            this.getAllSongs()
        }
        catch(e){
            console.log(e.message)
        }
    
    }

    filterSongs = (arrayOfSongs) =>{
        console.log(arrayOfSongs)
        this.setState({
            songs: arrayOfSongs
        })
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <Header />
                <FilterSearch search={this.state.songs} filterTrigger={this.filterSongs} />
                <SongTable songs={this.state.songs} deleteSong={this.deleteSong.bind(this)} />
                <CreateSong addNewSong={this.addNewSong.bind(this)} />
                <Footer />
            </div>
         );
    }
}
 
export default App;