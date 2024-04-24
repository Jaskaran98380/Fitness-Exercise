export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ee284a5eedmsh5c166633e4b4c1ap13cf67jsn85b7ce0fc146',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'ee284a5eedmsh5c166633e4b4c1ap13cf67jsn85b7ce0fc146',
  },
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };