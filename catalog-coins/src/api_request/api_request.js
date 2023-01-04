import store from "../redux/store";

//общий запрос
export function ApiRequestListCoins(adress) {
    
    const url = `http://localhost:5000/${adress}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_COINS',
                payload: {
                    Coins: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

//запрос по id
export function ApiRequestListCoinsId(id) {

    const url = `http://localhost:5000/coins/${id}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_ID_COIN',
                payload: {
                    IdCoin: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

//запрос по инпуту
export function ApiRequestListCoinsName(name) {

    let url = `http://localhost:5000/coin/${name}`
    name === '' ? url = `http://localhost:5000/coins` :  url = `http://localhost:5000/coin/${name}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_COINS',
                payload: {
                    Coins: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}