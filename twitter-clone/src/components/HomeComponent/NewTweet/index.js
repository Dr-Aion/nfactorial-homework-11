import { PROFILE_FLOWERS_IMG_PATH, PROFILE_MY_IMG_PATH } from "../images";

export default function NewTweet({content, onChangeText, onTweet}) {
    return (
        <div className = "p-3 d-flex flex-column" style = {{borderBottom: '2px solid whitesmoke'}}>
            <div>
                <img src = {PROFILE_FLOWERS_IMG_PATH} style = {{width: 50, height: 50, borderRadius: 50}}/>
                <input onChange = {onChangeText} value = {content} placeholder="What's happening?" style = {{border: 'none', fontSize: 18, outline: 'none'}} className = "mx-3"/>
            </div>
            <button onClick={onTweet} style = {{alignSelf: 'flex-end', color: 'white', backgroundColor: '#1D9BF0', borderRadius: 20, height: 40, width: 70, border: 'none'}}>Tweet</button>
        </div>
    )
}