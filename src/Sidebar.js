import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailIcon from '@material-ui/icons/Email';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from '@material-ui/core'

import './Sidebar.css'
import SidebarOptions from './SidebarOptions'

function Sidebar(){
    return(
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOptions active Icon={HomeIcon} title="Home"  />
            <SidebarOptions  Icon={SearchIcon} title="Explore"  />            
            <SidebarOptions Icon={NotificationsIcon} title="Notifications"  />
            <SidebarOptions Icon={EmailIcon} title="Messages"  />
            <SidebarOptions Icon={BookmarksIcon} title="Bookmarks"  />
            <SidebarOptions Icon={ListIcon} title="Lists"  />
            <SidebarOptions Icon={PersonIcon} title="Profile"  />
            <SidebarOptions Icon={MoreHorizIcon} title="More"  />

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
            
        </div>
    )
}

export default Sidebar