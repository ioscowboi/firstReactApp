import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'; 

// Google youtube api key: 
const API_KEY = "AIzaSyBSStlhQzhI9-aCOdAJ66qJJyk9ncb2xPY";

// download and install package to manage google youtube api requests...


// Create a new component. This componenet should produce
// some HTML
const App = () => {
  // jsx:
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
// must create an instance of app for it to render in the browser:
//  (instance, where on the page?)
ReactDOM.render(<App />, document.querySelector('.container') );
