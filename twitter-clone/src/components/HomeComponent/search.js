
export default function Search({searchForTweets}){
    return (
        <div className="mt-3 mx-5">
            <div class="input-group">
                <input onChange={searchForTweets} type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            </div>
        </div>
    ) 
}