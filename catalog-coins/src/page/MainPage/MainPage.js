import React, { Component } from 'react';
import './MainPage.css';
import СoinSelection from '../../../src/component/СoinSelection/СoinSelection';
import Search from '../../component/Search/Search';
import AdvancedFilter from '../../component/AdvancedFilter/AdvancedFilter';

class MainPage extends Component {

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
                    <h1 className='main-page__title'>Homepage</h1>
                    <div className='main-page__form-container'>
                        <Search />
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
                        <СoinSelection />
                        :
                        <AdvancedFilter />
                    }
                </div>
            </section>
        )
    }
}

export default MainPage;