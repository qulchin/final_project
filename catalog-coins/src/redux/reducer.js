
const initialState = {
    arrCoins: [],
    idCoin: [],
    button: false,
    filter: {
        country: "",
        from_price: 1,
        from_year: 1,
        metal: "",
        quality: "",
        to_year: 9999,
        to_price: 9999
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API_COINS':
            const apiOne = action.payload.Coins;
            state.arrCoins = apiOne;
            return { ...state, ...state.arrCoins }
        case 'ADD_API_ID_COIN':
            const apiTwo = action.payload.IdCoin;
            state.idCoin = apiTwo;
            return { ...state, ...state.idCoin }
        case 'FILTER_COINS':
            const filter = action.payload.advancedFilter;
            state.filter = filter;
            return { ...state, ...state.filter }
        default:
            return state;
    }
}
export default reducer;