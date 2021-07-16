import React from 'react';

const songList = (props) => {
    return ( 
        <table id='songList'>
            <thead>
                <tr>
                    <th>song title</th>
                    <th>album</th>
                    <th>artist</th>
                    <th>genre</th>
                    <th>release date</th>
                </tr>
            </thead>
            <tbody>
                {props.songList.map((song) => {
                    return(
                        <tr>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td><button type='submit'>DELETE</button></td>
                        </tr>
                    )}
                    )}
            </tbody>
        </table>
     );
}
 
export default songList;