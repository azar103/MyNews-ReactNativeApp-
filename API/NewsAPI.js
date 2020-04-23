const API_KEY = "8103f32a1a4a425b8228266bb612440e"

 export function getNewsByCategory(category,  pageSize, country) {
    const url = "https://newsapi.org/v2/top-headlines?country="+country+"&pageSize="+pageSize+"&category="+category+"&apiKey="+API_KEY;
    return  fetch(url)
            .then((response) => response.json() )
            .catch((error) =>  console.log(error))
}


export function getNewsBySearch(category, query, pageSize, country) {
        const url = "https://newsapi.org/v2/top-headlines?country"+country+"&category="+category+"&q="+query+"&pageSize="+pageSize+"&apiKey="+API_KEY;
    return fetch(url)
           .then((response) => response.json())
           .catch((error) =>console.log(error))   
}