import React, { Component } from 'react';

const SongTable = (props) => {
    return ( 
        <table>
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
                {props.songs.map((song) => {
                    return(
                        <tr>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.release_date}</td>
                        <td><button onClick={() => props.deleteSong(song.id)}>DELETE</button></td>
                        </tr>
                    )}
                    )}
            </tbody>
        </table>
     );
}
 
export default SongTable;