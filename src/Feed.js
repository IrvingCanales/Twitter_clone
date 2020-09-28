import React, { useEffect, useState } from 'react'
import Tweetbox from './Tweetbox'
import Post from './Post'


import db from './firebase'
import './Feed.css'


function Feed(){

    const [posts, setPots] = useState([])

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{
            setPots(snapshot.docs.map(p => p.data() ))
        })
    },[])//Run this code when mounted once cause the array is empty

    

    return(
        <div className="feed">
            {/*Header */}
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            


            {/*Tweetbox */}
            <Tweetbox/>


            {/*Tweets */}        
            
            {posts.map(po => (                
                <Post key={po.text} displayName={po.displayName} username={po.username} verified={po.verified} text={po.text} image={po.image} avatar={po.avatar} />
            ))}
            
            
            
            
        </div>
    )
}

export default Feed