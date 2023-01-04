import React, { Component } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import { ApiRequestListCoinsName } from '../../api_request/api_request';

class Search extends Component {

    state = {
        search: ''
    }

    searhCoin = (event) => {
        this.setState({ search: event.target.value });
    };

    clickSearch = (e) => {
        const searchName = this.state.search;
        return ApiRequestListCoinsName(searchName);
    }

    render() {
        return (
            <>
                <h4 className='search__form-title'>Input field</h4>
                <form className='search__form'>
                    <input
                        id="search"
                        name="search"
                        value={this.state.search}
                        onChange={this.searhCoin}
                        className='search__form-input' />
                    <Link className='search__form-link' to='/listOfTheCoins'>
                        <button
                            onClick={this.clickSearch}
                            className='search__form-button'>
                            Search
                        </button>
                    </Link>
                </form>
            </>
        )
    }
}

export default Search;