import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
            <TuneIcon />
            <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow 
            image="https://yt3.ggpht.com/ytc/AAUvwnirWIg51aWMS1NZHuugFvb4wBmI-bg19TBKaIhypw=s900-c-k-c0x00ffffff-no-rj"
            channel="Sameer Kongath"
            verified
            sub="100K"
            noOfVideos={250}
            descripion="Its test description"
            />
            <hr />
            <VideoRow 
            image="https://3.imimg.com/data3/ED/VM/MY-1941440/kerala-nature-wildlife-tour-500x500.jpg"
            subs="120K"
            description="Its another one"
            timestamp="1 year ago"
            channel="Sameer Kongath"
            title="Channel for Kerala"
            views="1M"
            />
            <VideoRow 
            image="https://3.imimg.com/data3/ED/VM/MY-1941440/kerala-nature-wildlife-tour-500x500.jpg"
            subs="120K"
            description="Its another one"
            timestamp="1 year ago"
            channel="Sameer Kongath"
            title="Channel for Kerala"
            views="1M"
            />
            <VideoRow 
            image="https://3.imimg.com/data3/ED/VM/MY-1941440/kerala-nature-wildlife-tour-500x500.jpg"
            subs="120K"
            description="Its another one"
            timestamp="1 year ago"
            channel="Sameer Kongath"
            title="Channel for Kerala"
            views="1M"
            />
            <VideoRow 
            image="https://3.imimg.com/data3/ED/VM/MY-1941440/kerala-nature-wildlife-tour-500x500.jpg"
            subs="120K"
            description="Its another one"
            timestamp="1 year ago"
            channel="Sameer Kongath"
            title="Channel for Kerala"
            views="1M"
            />
            <VideoRow 
            image="https://3.imimg.com/data3/ED/VM/MY-1941440/kerala-nature-wildlife-tour-500x500.jpg"
            subs="120K"
            description="Its another one"
            timestamp="1 year ago"
            channel="Sameer Kongath"
            title="Channel for Kerala"
            views="1M"
            />
            <VideoRow 
            image="https://3.imimg.com/data3/ED/VM/MY-1941440/kerala-nature-wildlife-tour-500x500.jpg"
            subs="120K"
            description="Its another one"
            timestamp="1 year ago"
            channel="Sameer Kongath"
            title="Channel for Kerala"
            views="1M"
            />
        </div>
    )
}

export default SearchPage
