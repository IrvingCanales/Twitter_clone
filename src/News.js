import React from 'react'
import './News.css'

import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
  import SearchIcon from "@material-ui/icons/Search";

function News(){
    return(
        <div className="news">
             <div className="news_input">
                <SearchIcon className="news_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="news_widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1236673447876603904"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="irvingc7"
                options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://facebook.com/cleverprogrammer"}
                options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
                />
            </div>
        </div>
    )
}

export default News