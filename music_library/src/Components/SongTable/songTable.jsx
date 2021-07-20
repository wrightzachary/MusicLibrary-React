import React, { Component } from 'react';

const SongTable = (props) => {
    return ( 
        <center>
        <table>
            <thead>
                <tr>
                    <th>song title</th>
                    <th>album</th>
                    <th>artist</th>
                    <th>release date</th>
                    <th>genre</th>

                </tr>
            </thead>
            <tbody>
                {props.songs.map((song) => {
                    return(
                        <tr>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>

                        <td><button onClick={() => props.deleteSong(song.id)}>DELETE</button></td>
                        </tr>
                    )}
                    )}
            </tbody>
        </table>
        </center>
     );
}
 
export default SongTable;