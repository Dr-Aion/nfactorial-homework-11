import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { PROFILE_FOG_IMG_PATH, PROFILE_PETER_IMG_PATH, PROFILE_CASEY_IMG_PATH, PROFILE_MRBEAST_IMG_PATH, PROFILE_FLOWERS_IMG_PATH } from "./images"
import Search from "./search";
import '../../App.css';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            content: '',
            tweets: [
                {
                    id: 0,
                    authorName: 'Peter McKinnon',
                    authorUserName: "@petermckinnon",
                    img: PROFILE_PETER_IMG_PATH,
                    content: `First video of 2023 tomorrow! Headphones recommended. It's....different :) See you at 11AM!`,
                    comments: 41,
                    retweets: 47,
                    likes: 27, 
                    view: 1124
                },
                {
                    id: 1,
                    authorName: 'Casey Neistat',
                    authorUserName: "@Casey",
                    img: PROFILE_CASEY_IMG_PATH,
                    content: `Biden won the presidency with 81m votes.  MrBeast has a 130m youtube subscribers... not apples-to-apples but i think we could do this.  Jimmy, if you run on a platform of making the DMV less of a pain in the ass you would absolutely win.`,
                    comments: 250,
                    retweets: 154,
                    likes: 7423, 
                    view: '1.6m'
                },
                {
                    id: 2,
                    authorName: 'MrBeast',
                    authorUserName: "@mrbeast",
                    img: PROFILE_MRBEAST_IMG_PATH,
                    content: `YouTube just started splitting shorts revenue with creators and Twitter is now sharing revenue below tweets with creators… never been a better time to get into making content!`,
                    comments: 3677,
                    retweets: 8005,
                    likes: '184k', 
                    view: '15.2m'
                }
            ],

            filteredTweets: [
                {
                    id: 0,
                    authorName: 'Peter McKinnon',
                    authorUserName: "@petermckinnon",
                    img: PROFILE_PETER_IMG_PATH,
                    content: `First video of 2023 tomorrow! Headphones recommended. It's....different :) See you at 11AM!`,
                    comments: 41,
                    retweets: 47,
                    likes: 27, 
                    view: 1124
                },
                {
                    id: 1,
                    authorName: 'Casey Neistat',
                    authorUserName: "@Casey",
                    img: PROFILE_CASEY_IMG_PATH,
                    content: `Biden won the presidency with 81m votes.  MrBeast has a 130m youtube subscribers... not apples-to-apples but i think we could do this.  Jimmy, if you run on a platform of making the DMV less of a pain in the ass you would absolutely win.`,
                    comments: 250,
                    retweets: 154,
                    likes: 7423, 
                    view: '1.6m'
                },
                {
                    id: 2,
                    authorName: 'MrBeast',
                    authorUserName: "@mrbeast",
                    img: PROFILE_MRBEAST_IMG_PATH,
                    content: `YouTube just started splitting shorts revenue with creators and Twitter is now sharing revenue below tweets with creators… never been a better time to get into making content!`,
                    comments: 3677,
                    retweets: 8005,
                    likes: '184k', 
                    view: '15.2m'
                }
            ]
    
        }
    }

    onChangeText = (e) => {
        this.setState({
            content: e.target.value 
        })
    }

    addToTweets = () => {
        const newTweet = {
            id: this.state.tweets.length,
            authorName: 'Aiganym Moldagulova',
            authorUserName: '@aiganym',
            img: PROFILE_FLOWERS_IMG_PATH,
            content:  this.state.content,
            comments: 0,
            retweets: 0,
            likes: 0, 
            view: 0,
            minutes: '1m'
        }

        this.setState({
            tweets: [newTweet, ...this.state.tweets, ],
            filteredTweets: [newTweet, ...this.state.tweets, ],
            content: ''
        })
    }
    
    deleteTweet = (id) => {
        // console.log('delete', id)
        this.setState({
            tweets: this.state.tweets.filter(item => item.id !== id),
            filteredTweets: this.state.tweets.filter(item => item.id !== id)
        })
    }

    searchForTweets = (e) => {
        // console.log(e)
        this.setState({
            filteredTweets: this.state.tweets.filter(item => item.content.toLowerCase().includes(e.target.value.toLowerCase()))
        })
    }

    render(){
        const {content, tweets, filteredTweets} = this.state;
        return(
            <div className="w-100 d-flex mt-3">
                <div className = "w-75">
                    <h5 className="mx-3">Home</h5>
                    <NewTweet content = {content} onChangeText = {this.onChangeText} onTweet = {this.addToTweets}/>
                    <TweetsList tweets = {filteredTweets} deleteTweet = {this.deleteTweet}/>
                </div>
                <div className="vertical-devider"></div>
                <div className = "w-25">
                    <Search searchForTweets = {this.searchForTweets}/>
                </div>
            </div>
        )
    }
}
export default Home;

// export default function Home() {
//     return (
//         <div className="w-50 mt-3">
//             <h5 className="mx-3">Home</h5>
//             <NewTweet/>
//             <TweetsList/>
//         </div>
        
//     )
// }