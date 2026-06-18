export const LOGO = 
"https://i.pinimg.com/736x/21/d3/80/21d3806d1918ea57c343f95a390ce120.jpg";


export const USER_AVATAR = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
  }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg" 

export const SUPPORTED_LANGUAGES = [{identifier: "en", name: "English"}, {identifier: "hindi", name: "Hindi"}, {identifier: "spanish", name: "Spanish"}];



export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY; 