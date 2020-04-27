const initialState = { countrySelected: 'fr' }
function getCountry(state = initialState , action) {
    let nextState
    switch(action.type){
        case 'GET_COUNTRY':
            nextState = {
                ...state,
                countrySelected: action.value
            }
            return nextState || state
        default:
            return state;
    }
}

export default getCountry