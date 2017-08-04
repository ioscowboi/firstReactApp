import React from 'react';

// const VideoListItem = (props) => {
//     // pull the video from the props object, set as a variable:
//     const video = props.video;
    
//     return <li>Video</li>
// };
// or you can just do: 
//  which says, 'this argument has a property called video, please assign it to a const called video:
const VideoListItem = ({video}) => {
    // pull the image url from the video object for use as thumbnail:
    const imageUrl = video.snippet.thumbnails.default.url;
    return <li className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>
    </li>

};
export default VideoListItem;
