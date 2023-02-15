import Tweet from "./Tweet"

export default function TweetsList({tweets, deleteTweet}) {

    return ( 
        <div>
            {tweets.map((tweet) => (<Tweet tweet = {tweet} key = {tweet.id} deleteTweet = {deleteTweet}/>))}
        </div> 
    )
} 