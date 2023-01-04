import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListCoins.css';
import Coin from '../Coin/Coin';

const mapStateToProps = (state) => {
    return {
        data: state.arrCoins,
        filter: state.filter
    };
};

class ListCoins extends Component {

    render() {
        const coins = this.props.data;
        const { metal, country, quality, from_price, to_price, from_year, to_year } = this.props.filter;
        return (
            <div className='list-coins'>
                {coins && coins.filter((item) =>
                    (item.Composition === metal ?
                        metal : !metal)
                    && (country === "" ?
                        true : country === item.Issuing_Country ? country : !country)
                    && (quality === "" ?
                        true : quality === item.Quality ? quality : !quality)
                    && (+from_price === 1 && +to_price === 2000 ?
                        true : +from_price <= +item.Price && +to_price >= +item.Price ?
                            +from_price || +to_price : !from_price || !to_price)
                    && (+from_year === 1 && +to_year === 2023 ?
                        true : +from_year <= +item.Year_Year && +to_year >= +item.Year_Year ?
                            +from_year || +to_year : !from_year || !to_year)
                ).map((item) => (
                    <div className='coin' key={item.id}>
                        <Coin {...item} />
                    </div>
                ))}
            </div>
        )
    }
}

export default connect(mapStateToProps)(ListCoins);