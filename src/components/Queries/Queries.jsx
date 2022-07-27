import React from 'react'
import './queries.css';

const Queries = () => {
  return (
    <div className='queries__div'>
        <div className='queries__div-innerDiv'>
          <div>
            <div className='queries__div-header'>
              Any Queries? Reach Out to Us
            </div>
            <div className='queries__div-text'>
            Feel free to write to us, we are happy to help you
            </div>
          </div>
          <div className='queries__button-div'>
            <button>
                write to us
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.3102L16 10.0001L0 0.689941V7.93114L11.4615 10.0001L0 12.069V19.3102Z" fill="white"/>
</svg>

            </button>
            </div>
        </div>
    </div>
  )
}

export default Queries