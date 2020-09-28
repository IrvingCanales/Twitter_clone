import React from 'react'

import './SidebarOptions.css'

function SidebarOptions({active, Icon, title}){
    return(
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
             <Icon/> 
             <h2>{title}</h2>
        </div>
    )
}

export default SidebarOptions