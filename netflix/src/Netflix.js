import React, {Component} from 'react';
import DisplayMovies from './DisplayMovies';

class Netflix extends Component{
    render(){
        var flix =
            [
                {
                    movieName: "Jeepers Creepers 2",
                    yearReleased: 2003,
                    genre: "Horror"
                },
                {
                    movieName: "All About the Benjamins",
                    yearReleased: 2002,
                    genre: "Action/Comedy"
                },
                {
                    movieName: "Captain America:The Winter Soldier",
                    yearReleased: 2014,
                    genre: "Action"
                }
            ]
        return(
            <div>
                <DisplayMovies shipoopy={flix}/>

            </div>
        )
    }
}
export default Netflix;