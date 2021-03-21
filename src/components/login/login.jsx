import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import '../style/login_sigup_style.css'
import Button from '../button'
import head from '../../assets/head.png'
import { TiTick } from 'react-icons/ti'
import { useHistory } from 'react-router-dom'



const Login = () => {

    const history = useHistory()

    let [captchaValLogin, setCaptchaValLogin] = useState('2')
    let [value, setValue] = useState({ email: '', password: '' })

    //change captcha value 
    const changeCaptchaValLogin = () => {
        let mathRandom = Math.random() * 10
        let floor = Math.floor(mathRandom).toString()
        setCaptchaValLogin(floor)
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/activate')
    }

    // set first letter capital of input field
    const handleChange = (e) => {
        let uper = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setValue({ [e.target.id]: uper })
    }


    return (
        <div className='login_container'>
            <div>

                <div className='main_login_div'>
                    <div className='form_div'>
                        <div>
                            <img className='head_img' src={head} alt="" />
                        </div>
                        <p className='login_head'>Easy Deals</p>
                        <p className='login_para'>Hi there! Please Sign in</p>
                        <form onSubmit={handleSubmit} >
                            <div className='fields_div'>
                                <input
                                    className='form_input'
                                    placeholder='Username'
                                    onChange={(e) => handleChange(e)}
                                    value={value.email}
                                />

                            </div>
                            <div className='fields_div'>
                                <input
                                    className='form_input'
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    onChange={(e) => handleChange(e)}
                                    value={value.password}
                                />
                                <RiLockPasswordLine className='eye_icon'/>

                            </div>
                            <div>
                                <div className='fields_div captcha_div'>
                                    <input
                                        className='form_input captcha'
                                        type="text"
                                        name="Captcha"
                                        id="captcha"
                                        placeholder='Captcha'
                                    />
                                    <input type="button" readOnly={true} className='captcha_num' onClick={changeCaptchaValLogin}
                                        value={captchaValLogin}
                                    />
                                </div>
                            </div>
                            <Button value={<TiTick />} className='login_btn' />
                        </form>
                    </div>
                </div>
                <div className='create_div' onClick={() => history.push('/signup')} >
                    <Link className='create_link' to='/signup'>Create an account</Link>
                </div>
            </div>
        </div>
    )
}

export default Login