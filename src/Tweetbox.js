import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import './Tweetbox.css'
import {Avatar} from '@material-ui/core'
import db from './firebase'

function Tweetbox(){

    const [tweetMessage, setTweetMessage] = useState('')
    const [imageURL, setImageURL] = useState('')

    const addTweet = ()=>{        
        db.collection('posts').add({
            avatar: "https://irvingcanales.github.io/img/avatar.656cbff8.jpg",
            displayName: "Irving Canales",
            image: imageURL,
            text: tweetMessage,
            username: "irvingc7",
            verified: true,
            timestamp: new Date(),
        })
        
        setTweetMessage("")
        setImageURL("")

    }

    return(
        <div className="tweetbox">
            <form>
                <div className="tweetbox_input">
                    <Avatar src="https://irvingcanales.github.io/img/avatar.656cbff8.jpg" />
                    <input onChange={e => setTweetMessage(e.target.value) } value={tweetMessage} placeholder="What's happening" type="Text" ></input>
                            
                </div>
                <input onChange={e=> setImageURL(e.target.value)} value={imageURL} className="tweetbox_imageInput" placeholder="Optional: Enter image URL" type="text"></input>
            </form>
            <Button variant="outlined" type="Submit" className="tweetbox_tweetButton" onClick={addTweet} >Tweet</Button>
        </div>
    )
}

export default Tweetbox