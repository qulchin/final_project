import React, { Component } from 'react';
import './СoinSelection.css';
import { Link } from 'react-router-dom';
import { ApiRequestListCoins } from '../../api_request/api_request';

class СoinSelection extends Component {

    state = {
        data: []
    }

    bullionCoins = () => {
        const adress = 'investment_coins';
        return ApiRequestListCoins(adress);
    }

    exclusiveCoins = () => {
        const adress = 'exclusive_coins';
        return ApiRequestListCoins(adress);
    }

    commemorativeCoins = () => {
        const adress = 'commemorative_coins';
        return ApiRequestListCoins(adress);
    }

    render() {
        return (
            <section className='coin-selection'>
                <div className='coin-selection__block'>
                    <h2 className='coin-selection__block-title'>Bullion coins</h2>
                    <Link to='/listOfTheCoins'>
                        <button onClick={this.bullionCoins} className='coin-selection__block-button'>Show all &gt;</button>
                    </Link>
                    <div className='coin-selection__block-image'>
                        <img src='image_counts/South Vietnamese Dong_1.png' alt='Bullion coins' />
                    </div>
                </div>
                <div className='coin-selection__block'>
                    <h2 className='coin-selection__block-title'>Exclusive coins</h2>
                    <Link to='/listOfTheCoins'>
                        <button onClick={this.exclusiveCoins} className='coin-selection__block-button'>Show all &gt;</button>
                    </Link>
                    <div className='coin-selection__block-image'>
                        <img src='image_counts/ISK_2.png' alt='Exclusive coins' />
                    </div>
                </div>
                <div className='coin-selection__block'>
                    <h2 className='coin-selection__block-title'>Commemorative coins</h2>
                    <Link to='/listOfTheCoins'>
                        <button onClick={this.commemorativeCoins} className='coin-selection__block-button'>Show all &gt;</button>
                    </Link>
                    <div className='coin-selection__block-image'>
                        <img src='image_counts/Looney_1.png' alt='Commemorative coins' />
                    </div>
                </div>
            </section>
        )
    }
}

export default СoinSelection;