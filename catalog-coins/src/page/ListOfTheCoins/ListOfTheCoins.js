import React, { Component } from 'react';
import '../MainPage/MainPage.css';
import ListCoins from '../../component/ListCoins/ListCoins';
import Search from '../../component/Search/Search';
import AdvancedFilter from '../../component/AdvancedFilter/AdvancedFilter';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        AdvancedFilterButton: state.button
    };
};

class ListOfTheCoins extends Component {

    state = {
        AdvancedFilterButton: false
    }

    clickAdvancedFilterButton = () => {
        this.state.AdvancedFilterButton === false ?
            this.setState({
                AdvancedFilterButton: true
            })
            :
            this.setState({
                AdvancedFilterButton: false
            })
    }

    render() {
        const filter = this.state.AdvancedFilterButton;
        return (
            <section className='main-page'>
                <div className='main-page__container'>
                    <h1 className='main-page__title'>List of the coins</h1>
                    <div className='main-page_navi'>
                        <Link className='main-page_navi-Link' to='/'>
                            <p>Homepage</p>
                        </Link>
                        <p>-</p>
                        <p>List of the coins</p>
                    </div>
                    <div className='main-page__form-container'>
                        <Search {...this.state} />
                    </div>
                    <div className='main-page__Coins-filter'>
                        <button
                            className='main-page__Coins-filter-button'
                            onClick={this.clickAdvancedFilterButton}>
                            Advanced filter
                        </button>
                        {filter === false ?
                            <span className='main-page__Coins-filter-span'>&#709;</span>
                            :
                            <span className='main-page__Coins-filter-span'>&#708;</span>
                        }
                    </div>
                    {filter === false ?
                        <ListCoins {...this.state} />
                        :
                        <AdvancedFilter />
                    }
                </div>
            </section>
        )
    }
}

export default connect(mapStateToProps)(ListOfTheCoins);
