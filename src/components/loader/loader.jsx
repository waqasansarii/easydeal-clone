import React from 'react'
import '../style/loader.css'

export default function Loader() {
    return (
        <div>
            <div className='loader_div'>
                <div>
                    <img src="https://xor.sc/ext/xor.png" alt="" />
                </div>
                <div>
                    <img src='https://xor.sc/ext/load.svg' alt="" />
                </div>
            </div>
        </div>
    )
}
