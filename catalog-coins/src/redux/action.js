const addCoins = {
  type: 'ADD_API_COINS',
  text: 'Add Coins'
}

const addIdCoin = {
  type: 'ADD_API_ID_COIN',
  text: 'Id Coins'
}

export function advancedFilter(filter) {
  return {
    type: 'FILTER_COINS',
    payload: {
      advancedFilter: filter
    }
  }
}
