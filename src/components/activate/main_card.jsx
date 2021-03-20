import React,{useState} from 'react'
import bitcoin from '../../assets/btc.png'
import litecoin from '../../assets/ltc.png'
import '../style/main_card.css'
import Qr_code from './qr_code'

 


 const MainCardActivate=() =>{

    let [open,setOpen] = useState(false)
    let [value, setValue] = useState('')

    const handleOpen = (e)=>{
        setOpen(!open)
        setValue(e)
    }
    const handleValueChange = (e)=>{
             setValue(e)
    } 

    return (
        <div className='card_container'>
            <div className='main_div_mainCard' >
                {!open?
                <div >
                    <img className='coin_img' onClick={()=>handleOpen('litecoin')} src={litecoin} alt=""/>
                    <img className='coin_img' onClick={()=>handleOpen('bitcoin')} src={bitcoin} alt=""/>
                </div>
                :
                null
                }
                {open?
                <Qr_code func={handleOpen} value={value} changeFunc={handleValueChange}/>
                :
                null
                }
                <div className='main_detail_div'>
                <div className='card_details_div'>
                    <p className='card_main_para'>Account not activated</p>
                    <p className='card_para2'>To activate an account make a deposit of $20 using any of the suggested methods</p>
                    <p className='blnce_para'>This amount will be added to balance</p>
                </div>
                </div>
            </div>
            
        </div>
    )
}


export default MainCardActivate