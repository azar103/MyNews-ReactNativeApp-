const initialState = { favoriteArticles: [] }

function toggleFavorite(state = initialState, action) {
    let nextState;
    switch(action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteIndex = state.favoriteArticles.findIndex((item) => item.title === action.value.title);
            if(favoriteIndex !== -1){
                nextState = {...state,
                    favoriteArticles: state.favoriteArticles.filter((item, index)=> index !== favoriteIndex)
               }    
            }else {
               nextState = {...state,
                          favoriteArticles: [...state.favoriteArticles, action.value]  
                           }
            }
             
            return nextState || state
       default:
           return state;     
    }
}


export default toggleFavorite