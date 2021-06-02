import { Avatar } from '@material-ui/core'
import React from 'react'
import './Video.css'
function Video({image,title,channel, channelImage,views, timestamp}) {
    return (
        <div className="video">
            <img className="video__thumbnail" src={image} alt={title} />
            <div className="video__info">
            <Avatar className="video__avatar" alt={channel} src={channelImage}/>
            <div className="video__text">
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} . {timestamp}</p>
            </div>
            </div>
        </div>
    )
}

export default Video
