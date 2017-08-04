import React from 'react';
import VideoListItem from './video_list_item';
// see index.js, but props is now being passed down from the parent component, 
//  so set is as an argument to be passed in:
const VideoList = (props) => {
    // build an array full of the video api objects, wrap them in html or jsx to be displayed on the screen
    //      in the component later:
    //      map allows you to loop through an array list:
            // store it in a constant so that it cant be changed:
    const videoItems = props.videos.map((video) => {
        // use a unique key so that react can keep track of its state and update it as needed:
        return <VideoListItem key={video.etag} video={video} />
     });
    return(
        // use className instead of class to avoid syntax confusion
        //  then use jsx {} to add it to the dom
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;