import React, { Component } from 'react';

class FilterSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
         searchTerm:""
        }
      }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit =(event) => {
        console.log(this.state.searchTerm)
        event.preventDefault();
        let filteredResults = this.props.search.filter(song => {
            if (song.artist.toLowerCase()==this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.title.toLowerCase()==this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.album.toLowerCase()==this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.genre.toLowerCase()==this.state.searchTerm.toLowerCase()){
                return song
            }
            if (song.release_date.toLowerCase()==this.state.searchTerm.toLowerCase()){
                return song
            }
        });
        this.setState({
            searchTerm:""
        })
        this.props.filterTrigger(filteredResults)
    }
   render(){

    return (  
        <React.Fragment>
            <center>
            <form onSubmit={this.handleSubmit}>
               <label>Search For Song, Artist, Album, Genre, or Release Date:</label>
                <div className="col-md-4">
                    <input title="search" type='text' name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <input type="button" value="search" type="submit" />
                </div>
                
            </form>
            </center>
        </React.Fragment>
    );
   }
}
 
export default FilterSearch;