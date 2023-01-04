import React, { Component } from 'react';
import './AdvancedFilter.css';
import { connect } from 'react-redux';
import { advancedFilter } from '../../redux/action';

const mapDispatchToProps = dispatch => ({
    advancedFilter: (filter) => dispatch(advancedFilter(filter))
})

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

class AdvancedFilter extends Component {

    state = {
        country: "",
        from_price: 1,
        from_year: 1,
        metal: "",
        quality: "",
        to_year: 9999,
        to_price: 9999
    }

    searhCoin = (e) => {
        this.setState(prevValue => ({
            [e.target.name]: e.target.value
        }), () => {
            return this.props.advancedFilter(this.state);
        })
    };

    render() {
        console.log(this.state)
        const { metal, country, quality, from_price, to_price, from_year, to_year } = this.props.filter;
        return (
            <div className='advanced-filter'>
                <div className='advanced-filter__block'>
                    <form className='advanced-filter__form'>
                        <h5 className='advanced-filter__title'>Issuing country</h5>
                        <select
                            id="country"
                            name="country"
                            value={country}
                            onChange={this.searhCoin}
                            className='advanced-filter__select'>
                            <option value=""></option>
                            <option value="CANADA">Canada</option>
                            <option value="China">China</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Iran">Iran</option>
                            <option value="India">India</option>
                            <option value="UNITED STATES OF AMERICA">UNITED STATES OF AMERICA</option>
                            <option value="Egypt">Egypt</option>
                            <option value="the Weimar Republic">the Weimar Republic</option>
                            <option value="Ghana">Ghana</option>
                            <option value="British Virgin Islands">British Virgin Islands</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Australia">Australia</option>
                            <option value="France">France</option>
                            <option value="the Belgian Congo">the Belgian Congo</option>
                            <option value="Estonia">Estonia</option>
                            <option value="British South Africa">British South Africa</option>
                            <option value="the Republic of Vietnam">the Republic of Vietnam</option>
                        </select>
                        <h5 className='advanced-filter__title'>Metal</h5>
                        <select
                            id="metal"
                            name="metal"
                            value={metal}
                            onChange={this.searhCoin}
                            className='advanced-filter__select'>
                            <option value=""></option>
                            <option value="gold">Gold</option>
                            <option value="nickel">Nickel</option>
                            <option value="steel">Steel</option>
                            <option value="silver">Silver</option>
                        </select>
                        <h5 className='advanced-filter__title'>Quality of the coin</h5>
                        <select
                            id="quality"
                            name="quality"
                            value={quality}
                            onChange={this.searhCoin}
                            className='advanced-filter__select'>
                            <option value=""></option>
                            <option value="BU">BU</option>
                        </select>
                    </form>
                </div>
                <div className='advanced-filter__block'>
                    <form className='advanced-filter__form'>
                        <h5 className='advanced-filter__title'>Price</h5>
                        <div className='advanced-filter__form-block'>
                            <div className='advanced-filter__form-input-block'>
                                from <input
                                    type='number'
                                    name='from_price'
                                    value={from_price}
                                    onChange={this.searhCoin}
                                    className='advanced-filter__form-input' />
                            </div>
                            <div className='advanced-filter__form-input-block'>
                                to <input
                                    type='number'
                                    name='to_price'
                                    value={to_price}
                                    onChange={this.searhCoin}
                                    className='advanced-filter__form-input' />
                            </div>
                        </div>
                        <h5 className='advanced-filter__title'>Year of issue</h5>
                        <div className='advanced-filter__form-block'>
                            <div className='advanced-filter__form-input-block'>
                                from <input
                                    type='number'
                                    name='from_year'
                                    value={from_year}
                                    onChange={this.searhCoin}
                                    className='advanced-filter__form-input' />
                            </div>
                            <div className='advanced-filter__form-input-block'>
                                to <input
                                    type='number'
                                    name='to_year'
                                    value={to_year}
                                    onChange={this.searhCoin}
                                    className='advanced-filter__form-input' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedFilter);
