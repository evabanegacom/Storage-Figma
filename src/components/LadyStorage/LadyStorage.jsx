import React from 'react';
import './ladyStorage.css';
import container from '../../assets/Lady.svg';

const LadyStorage = () => {
    return (
        <div className='lady__div'>
            <div className='storage__div-first'>
                <div className='storage__div-header'>
                    Do you have a Self Storage for Sale?
                </div>
                <div className='storage__div-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor
                    sapien sagittis maecenas tincidunt. Quis pretium ornare
                    id diam amet proin scelerisque nunc.
                </div>
                <div>
                    <button>Sell Your Self Storage</button>
                </div>
            </div>
            <div className='lady__div-image'>
                <img src={container} alt='storage' />
            </div>
        </div>
    )
}

export default LadyStorage