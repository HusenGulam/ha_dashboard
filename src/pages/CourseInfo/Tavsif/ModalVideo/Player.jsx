import React from "react";
import ReactPlayer from "react-player";


const Video = ({show,setshow,video_url}) => {
  return (
    <div  style={{width:'100%',height:'100%',objectFit:'cover',backgroundSize:'cover',borderRadius:20}}>
      <ReactPlayer
        className="react-player fixed-bottom"
        url={video_url}
        width="100%"
        playing={show}
        style={{objectFit:'cover',backgroundSize:'cover',borderRadius:20}}
        height="100%"
        controls={true}
        onEnded={()=>setshow(false)}
      />
    </div>
  );
};

export default Video;