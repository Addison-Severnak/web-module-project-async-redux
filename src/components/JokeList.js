import React from "react";

import Joke from "./Joke";

const JokeList = props => {
    const { jokes } = props;

    return (<div id='jokeList'>
        {
            jokes.map(joke => {
                return (<Joke joke={joke}/>);
            })
        }
    </div>);
}

export default JokeList;