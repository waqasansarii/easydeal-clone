import React from 'react'
import '../style/qr_code.css'
import bitcoin from '../../assets/btc.png'
import litecoin from '../../assets/ltc.png'




export default function Qr_code({ func, value, changeFunc }) {
    // console.log(value)
    return (
        <div className='qr_container' >
            <img
                onClick={() => changeFunc('litecoin')}
                className={`coin_img ${value === 'litecoin' ? 'tiny_transform' : 'transform2'}`}
                src={litecoin} alt="" />
            <img
                onClick={() => changeFunc('bitcoin')}
                className={`coin_img ${value === 'litecoin' ? 'transform' : 'tiny_transform2'}`}
                src={bitcoin} alt="" />
            {/* <IoCloseCircleOutline className='close_icon' /> */}
            <div className='main_div_qrCode'>
                <p className='close_icon' onClick={func}>&times;</p>
                <div className='detail_qrCode'>

                    <p className='amount'> {value === 'bitcoin' ? '1$ = 0.00001706 BTC' : '1$ = 0.00490364 LTC'}</p>
                    <div className='ltc_para'>Please sent
                        <span className='id'>{value === 'bitcoin' ? ' BTC ' : ' LTC '}</span>
                        to:
                    </div>
                    <p className='id'>{value=='litecoin'?'MKsjPh3WzFAbHsFmAwrY8Sqn53MCMdb7ps':'39PXygPsVx1jKukoHKVQpZyUe4AB4fDkex'}</p>
                </div>
                <div className='qr_code_div'>
                    <img src="https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;chl=https://www.mrc-productivity.com/techblog/?p=1172" />
                    {/* <canvas></canvas> */}
                </div>
                <div className='activate_acount_div'>
                    <p>Account activated automatically when have 1 confirmation</p>
                    <button className='activate_btn'>I pad</button>
                </div>
            </div>
        </div>
    )
}
