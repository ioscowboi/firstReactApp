// Ensure users can type input into the top bar and send data to the api
// must include react since instances may be created: 
//  what this does is imports react and the creates a variable called React.Component from React:
import React, { Component } from 'react';

//  Functional component:
//  const SearchBar = () => {
//     return <input />
// };

// Class component:
// Class components allow more intelligence and self awareness:
// es6 class: 
// extends give you access to the react properties
class SearchBar extends React.Component {
    // define a js state:
    constructor(props){
        // super calls the parent method:
        super(props);
        // create an object and store it on state
        // when a user updates the search input it gets updated in state.
        //      as this.state.term:
        //      note that state exists on any class-based component
        this.state = { term: ''};
    }
    // required render method:
    render() {
        // to watch an event, use onXXXXXXX:
        return <input onChange={(event) => console.log(event.target.value) } />;
    }
    // watch for an event:
    onInputChange(event) {
        console.log(event.target.value);

    }
}
export default SearchBar;