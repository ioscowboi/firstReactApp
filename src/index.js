import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoDetail from './components/video_detail';
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
    // super is used to call props on the parent class:
    super(props);

    // ability to select a video starts here:
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }
  // create a video callback for the search input field: 
  videoSearch(term){
    // Inspect the youtube api search object: 
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
      //  this.setState({ videos: videos });
    }); 
  } 
  render(){

    // delay/lazy load the search request: 
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000);
    // jsx:
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />

        {/*pass data from the parent component 'App' to 'VideoList'  */}
        {/*   this is called passing prop  */}
        {/* pass in the selected video */}
        <VideoDetail video={this.state.selectedVideo}/>
          {/* onVideoSelect: updates the app state. This is a concept of passing a function that updates something
                else: */}
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it 
// on the page (in the DOM)
// must create an instance of app for it to render in the browser:
//  (instance, where on the page?)
ReactDOM.render(<App />, document.querySelector('.container') );
