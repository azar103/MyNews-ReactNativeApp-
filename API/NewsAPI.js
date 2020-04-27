const API_KEY = "6291d6ec202e441fbb363b7267ceab95"

 export function getNewsByCategory(category,  pageSize, country) {
    const url = "https://newsapi.org/v2/top-headlines?country="+country+"&pageSize="+pageSize+"&category="+category+"&apiKey="+API_KEY;
    return  fetch(url)
            .then((response) => response.json() )
            .catch((error) =>  console.log(error))
}


export function getNewsBySearch(category, query, pageSize, country) {
        const url = "https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&q="+query+"&pageSize="+pageSize+"&apiKey="+API_KEY;
    return fetch(url)
           .then((response) => response.json())
           .catch((error) =>console.log(error))   
}