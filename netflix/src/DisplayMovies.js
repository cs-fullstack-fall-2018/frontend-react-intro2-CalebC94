import React, {Component} from 'react';

class DisplayMovies extends Component{
    render(){
        var forEachMovie = this.props.shipoopy.map(
            eachItem => {
                return(
                    <div>
                        <h4>Movie Name: {eachItem.movieName}</h4>
                        <h4>Year Released: {eachItem.yearReleased}</h4>
                        <h4>Genre: {eachItem.genre}</h4>
                    </div>
                )
            }
        );
        return(
            <div>
                {forEachMovie}
            </div>
        )
    }
}
export default DisplayMovies;