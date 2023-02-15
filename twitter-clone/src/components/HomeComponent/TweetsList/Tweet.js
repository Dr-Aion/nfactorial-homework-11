import { useState } from "react"
import { COMMENTS, LIKES, RETWEETS, SHARE, VIEW, PROFILE_FOG_IMG_PATH, DELETE } from "../images"

export default function Tweet({tweet, deleteTweet}) {
    return (
        <div className = "mt-3 px-3" style = {{borderBottom: '2px solid whitesmoke'}}>
            <div className="d-flex justify-content-between">
                <p className = "mx-5" style = {{fontSize: 13, fontWeight: 'bold'}}>
                    You might like 
                    <span style = {{color: 'blue'}}> See more </span>
                    {tweet.minutes && <span>{tweet.minutes}</span>} 
                    {/* if tweet.minutes exists add, otherwise nothing will be displayed */}
                </p>
                <button onClick = {() => deleteTweet(tweet.id)} style = {{width: '30px', height: '30px', border: 'none', backgroundColor: 'transparent'}}>
                        {DELETE}
                    </button>
            </div>
        
            <div className="d-flex">
                <img src = {tweet.img} style = {{width: 50, height: 50, borderRadius: 50}}/>
                <div className="mx-3">
                    <p style = {{fontWeight: 600}}>{tweet.authorName} <span style = {{color: 'grey'}}>{tweet.authorUserName}</span></p>
                    <p>{tweet.content}</p>
                    {/* <p>{tweet.content.length > 200 ? tweet.content.slice(0, 200) + '...' : tweet.content}</p> */}
                </div>
            </div>

            <div className="d-flex m-auto justify-content-between" style = {{width: '80%'}}>
                <div className="d-flex">
                    <div style = {{width: 20, height: 20}}>{COMMENTS}</div>
                    <p className="px-1">{tweet.comments}</p>
                </div>
                <div className="d-flex">
                    <div style = {{width: 20, height: 20}}>{RETWEETS}</div>
                    <p className="px-1">{tweet.retweets}</p>
                </div>
                <div className="d-flex">
                    <div style = {{width: 20, height: 20}}>{LIKES}</div>
                    <p className="px-1">{tweet.likes}</p>
                </div>
                <div className="d-flex">
                    <div style = {{width: 20, height: 20}}>{VIEW}</div>
                    <p className="px-1">{tweet.view}</p>
                </div>
                <div className="d-flex">
                    <div style = {{width: 20, height: 20}}>{SHARE}</div>
                </div>
            </div>
           
        </div>
    )
}