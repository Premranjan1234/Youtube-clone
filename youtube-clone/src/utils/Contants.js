//const GOOGLE_API_KEY="AIzaSyDnksh7Hq-kN4LGMzEOhqWe_DMDWw07qro";
export const YOUTUBE_VIDEOS_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+process.env.REACT_APP_GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const OFFSET_LIVE_CHAT=10;