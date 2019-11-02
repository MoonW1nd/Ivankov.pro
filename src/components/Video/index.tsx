import React from 'react';

import './styles.less';

interface IVideoComponent {
    videoSrcURL: string;
    videoTitle: string;
}

export const Video = ({videoSrcURL, videoTitle, ...props}: IVideoComponent) => (
    <video loop={true} muted={true} autoPlay={true} poster="video/plane.jpg" className="Video">
        {/* <source src='video/plane.mp4' type='video/mp4'/> */}
        <source
            src="https://www.videvo.net/videvo_files/converted/2015_10/preview/Typing_dark_05_Videvo.mov98067.webm"
            type="video/webm"
        />
    </video>
);

export default Video;
