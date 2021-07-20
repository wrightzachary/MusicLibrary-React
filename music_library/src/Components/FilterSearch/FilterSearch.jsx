import React from 'react';

const FilterSearch = (props) => {

    const filterSearch =  () => props.search.filter(song => {
        if (song.artist.toLowerCase===props.searchFields.toLowerCase){
            return song.artist
        }
        if (song.title.toLowerCase===props.searchFields.toLowerCase){
            return song.title
        }
        if (song.album.toLowerCase===props.searchFields.toLowerCase){
            return song.album
        }
        if (song.genre.toLowerCase===props.searchFields.toLowerCase){
            return song.genre
        }
        if (song.release_date.toLowerCase===props.searchFields.toLowerCase){
            return song.release_date
        }
        // return song.artist.toLowerCase().includes(props.searchFields.toLowerCase()) || 
        //   song.title.toLowerCase().includes(props.searchFields.toLowerCase()) ||
        //   song.album.toLowerCase().includes(props.searchFields.toLowerCase()) ||
        //   song.genre.toLowerCase().includes(props.searchFields.toLowerCase()) ||
        //   song.releaseDate.toLowerCase().includes(props.searchFields.toLowerCase()) 
    });

    return (  
        <React.Fragment>
            <center>
            <form>
               <h1>Search For Song, Artist, Album, Genre, or Release Date</h1>
                <div className="col-md-4">
                <label>Search Music Table</label>
                    <input title="search" type='text' />
                    <input type="button" value="search" onClick={filterSearch} />
                </div>
                
            </form>
            </center>
        </React.Fragment>
    );
}
 
export default FilterSearch;