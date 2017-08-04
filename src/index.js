import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Youtube search capabilities:
// download and install package to manage google youtube api requests...

import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; 
import VideoList from './components/video_list';
// Google youtube api key: 
const API_KEY = "AIzaSyBSStlhQzhI9-aCOdAJ66qJJyk9ncb2xPY";

// Create a new component. This componenet should produce
// some HTML
// Unless there's a reason otherwise, always use the top level element to fetch data from, that way the whole app has
//  access to it: 
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };
    // Inspect the youtube api search object: 
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>{
      this.setState({ videos});
      //  this.setState({ videos: videos });
    }); 

  }
  render(){
    // jsx:
    return (
      <div>
        <SearchBar />
        {/*pass data from the parent component 'App' to 'VideoList'  */}
        {/*   this is called passing prop  */}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
// must create an instance of app for it to render in the browser:
//  (instance, where on the page?)
ReactDOM.render(<App />, document.querySelector('.container') );
