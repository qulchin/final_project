import React, { Component } from 'react';
import './Coin.css';
import { Link } from 'react-router-dom';
import { ApiRequestListCoinsId } from '../../api_request/api_request';

class Coin extends Component {

    requestCountId = () => {
        const id = this.props.id;
        return ApiRequestListCoinsId(id)
    }

    render() {
        const { Title, Paragraph_One, Img_one } = this.props;
        return (
            <>
                <div className='coin_image-block'>
                    <img src={Img_one} alt='coin' />
                </div>
                <div className='coin_info-block'>
                    <Link className='coin_info-Link' to='/coinPage'>
                        <h4 onClick={this.requestCountId} className='coin_info-title'>{Title}</h4>
                    </Link>
                    <p className='coin_info-info'>{Paragraph_One}</p>
                </div>
            </>
        )
    }
}

export default Coin;