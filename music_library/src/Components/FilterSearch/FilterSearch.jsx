import React from 'react';

const FilterSearch = (props) => {
    const filterSearch =  () => props.search.filter(song => {
        if (song.artist.toLowerCase===props.searchFields.toLowerCase){
            return true
        }
        // return song.artist.toLowerCase().includes(props.searchFields.toLowerCase()) || 
        //   song.title.toLowerCase().includes(props.searchFields.toLowerCase()) ||
        //   song.album.toLowerCase().includes(props.searchFields.toLowerCase()) ||
        //   song.genre.toLowerCase().includes(props.searchFields.toLowerCase()) ||
        //   song.releaseDate.toLowerCase().includes(props.searchFields.toLowerCase()) 
    });
    return (  
        <React.Fragment>
            <form>
                <input type="text" value="search for your criteria" />
                <input type="button" value="search" onClick={filterSearch} />
            </form>
            
        </React.Fragment>
    );
}
 
export default FilterSearch;