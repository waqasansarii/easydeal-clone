import React,{useState} from 'react'
import '../style/qr_code.css'
import bitcoin from '../../assets/btc.png'
import litecoin from '../../assets/ltc.png'
import ltc_qr from '../../assets/ltc-qr.jpeg'
import btc_qr from '../../assets/btc-qr.jpeg'
import load_gif from '../../assets/ipad-load.gif'



export default function Qr_code({ func, value, changeFunc }) {

    let [load,setLoad] = useState(false)
    
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
            <div className='main_div_qrCode'>
                <p className='close_icon' onClick={func}>&times;</p>
                <div className='detail_qrCode'>

                    <p className='amount'> {value === 'bitcoin' ? '1$ = 0.00001706 BTC' : '1$ = 0.00490364 LTC'}</p>
                    <div className='ltc_para'>Please sent
                        <span className='id'>{value === 'bitcoin' ? ' BTC ' : ' LTC '}</span>
                        to:
                    </div>
                    <p className='id'>{value=='litecoin'?'LSSCEZEsBjf18rA6TiNBbTrwFL5oEmX6if':'17UCqctqXksUBN6ZQEjvs2FCEjg8fZyiMq'}</p>
                </div>
                <div className='qr_code_div'>
                    <img className='qr_img' src={value==='litecoin'? ltc_qr: btc_qr} alt=""/>
                </div>
                <div className='activate_acount_div'>
                    <p>Account activated automatically when have 1 confirmation</p>
                    {load?
                    <button className='activate_btn'>Please wait <img className='load_git' src={load_gif} alt=""/></button>
                    : 
                    <button className='activate_btn' onClick={()=>setLoad(!false)}>I Paid</button>
                }

                </div>
            </div>
        </div>
    )
}
