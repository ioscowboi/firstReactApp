import React from 'react';

const VideoDetail = ({video}) => {
    // craft custom embed video url: 
    //  from the video const created above ^ '{video}
    const videoId = video.id.videoId;
    // url:
    // const url = 'https://www.youtube.com/embed/' + videoId;
    // or you can just do: 
    const url = `https://www.youtube.com/embed/${videoId}`;
    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="{url}"></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{vide.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;