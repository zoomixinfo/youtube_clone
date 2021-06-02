import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MicIcon from '@material-ui/icons/Mic';
import {Link} from 'react-router-dom'

function Header() {
    const [inputSearch, setInputSerach] = useState('')
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />
            <Link to="/">
            <img className="header__logo" src="https://www.vippng.com/png/detail/5-53780_youtube-logo-youtube-text-logo-png.png" alt="" />
            </Link>
            </div>
            <div className="header__input">
            <input onChange={e=> setInputSerach(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
            <Link to={`/search/${inputSearch}`}><SearchIcon className="header__inputButton"/></Link>
            <MicIcon />
            </div>
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar src="https://yt3.ggpht.com/ytc/AAUvwnirWIg51aWMS1NZHuugFvb4wBmI-bg19TBKaIhypw=s900-c-k-c0x00ffffff-no-rj" alt=""/>
            </div>
        </div>
    )
}

export default Header
