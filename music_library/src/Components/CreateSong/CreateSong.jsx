import React from 'react';
import './CreateSong.css';

class CreateSong extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          
        title: '',
        artist: '',
        album: '',
        genre: '',
        release_date: '',
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        const song = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre,

        }

        this.props.addNewSong(song);
        this.setState({
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',

        });
    }
  
    render() {
      return (
        <div >
            <center>
            <form onSubmit={this.handleSubmit}>
                <div className="row col-sm-3 sidenav">
                <h3>Add A New Song!</h3> 

                        <label>Title:</label>
                        <input type="text" name="title" value={this.state.title}
                        onChange={this.handleChange} />

                        <label>Album:</label>
                        <input type="text" name="album" value={this.state.album}
                        onChange={this.handleChange} />

                        <label>Artist:</label>
                        <input type="text" name="artist" value={this.state.artist}
                        onChange={this.handleChange} />

                        <label>Genre:</label>
                        <input type="text" name="genre" value={this.state.genre}
                        onChange={this.handleChange} />

                        <label>Release Date:</label>
                        <input type="text" name="release_date" value={this.state.release_date}
                        onChange={this.handleChange} />
                        <hr/>
                        <input type="submit" class="btn btn-info" value="Add" />

                </div>
            </form>
            </center>
        </div>
      )
    }
  }

export default CreateSong;
