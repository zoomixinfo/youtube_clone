import React from 'react'
import './ChannelRow.css'
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
function ChannelRow({image,channel,verified,sub,noOfVideos,descripion}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>{channel} {verified && <VerifiedUserIcon/>}</h4>
                <p>{sub} Subscribers . {noOfVideos} videos</p>
                <p>{descripion}</p>
            </div>
        </div>
    )
}

export default ChannelRow
