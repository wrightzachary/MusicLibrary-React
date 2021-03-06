import React, { Component } from 'react';
import './SongTable.css';

const SongTable = (props) => {
    return ( 
        <div class="col-sm-9 container">
            <h2>SONG LIST</h2>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Song title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                        <th>Delete Song</th>
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
                            <td><button class="btn btn-info" onClick={() => props.deleteSong(song.id)}>DELETE</button></td>
                            </tr>
                        )}
                        )}
                </tbody>
            </table>
        </div>
     );
}
 
export default SongTable;