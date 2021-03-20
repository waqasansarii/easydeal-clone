import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Button from '../button'
import { TiTick } from 'react-icons/ti'
import { FaRegUserCircle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'




const Signup = () => {

    const history = useHistory()

    let [hide, setHide] = useState(false)
    
    let [captchaVal, setCaptchaVal] = useState('2')
    let [username, setuserName] = useState('')
    let [email, setemail] = useState('')
    let [password, setPassword] = useState('')


    const handlePasswordSee = () => {
        setHide(!hide)
    }
    // const handleConfirmPasswordSee = () => {
    //     setconfirmPassword(!confirmPassword)
    //     // console.log(e.target.value)
    // }

    const changeCaptchaVal = () => {
        let mathRandom = Math.random() * 10
        let floor = Math.floor(mathRandom).toString()
        setCaptchaVal(floor)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/')
    }
    const handleuserName = (e) => {
        let uper = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setuserName(uper)
    }
    const handleEmail = (e) => {
        let uper = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setemail(uper)
    }
    const handlePassword = (e) => {
        let uper = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
        setPassword(uper)
    }
    return (
        <div className='login_container'>
            <div className='main_login_div'>
                <FaRegUserCircle className='user_icon' />
                <h2 className='login_para'>Create an account</h2>
                <div className='form_div'>
                    <form onSubmit={handleSubmit} >
                        <div className='fields_div'>
                            <input
                                className='form_input'
                                type="text"
                                name="name"
                                id="name"
                                placeholder='username'
                                onChange={(e) => handleuserName(e)}
                                value={username}
                            />
                        </div>
                        <div className='fields_div'>
                            <input
                                className='form_input'
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                onChange={(e)=>handleEmail(e)}
                                value={email}
                            />

                        </div>
                        <div className='fields_div'>
                            <input
                                className='form_input'
                                type={!hide ? "password" : 'text'}
                                name="password"
                                id="password"
                                placeholder='password'
                                onChange={(e)=>handlePassword(e)}
                                value={password}
                            />
                            {!hide ?
                                <AiOutlineEye className='eye_icon' onClick={handlePasswordSee} />
                                :
                                <AiOutlineEyeInvisible
                                    className={hide ? 'eye_icon eye_icon_color' : 'eye_icon'}
                                    onClick={handlePasswordSee}
                                />
                            }
                        </div>
                        {/* <div className='fields_div'>
                            <input
                                className='form_input signup'
                                type={!confirmPassword ? "password" : 'text'}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder='confirm password'
                            />
                            {!confirmPassword ?
                                <AiOutlineEye className='eye_icon' onClick={handleConfirmPasswordSee} />
                                :
                                <AiOutlineEyeInvisible
                                    className={confirmPassword ? 'eye_icon eye_icon_color' : 'eye_icon'}
                                    onClick={handleConfirmPasswordSee}
                                />
                            }
                        </div> */}
                        <div>

                            <div className='fields_div captcha_div'>
                                <input
                                    className='form_input captcha'
                                    type="text"
                                    name="captcha"
                                    id="captcha"
                                    placeholder='captcha'
                                />
                                <input type="button" readOnly={true} className='captcha_num' onClick={changeCaptchaVal}
                                    value={captchaVal}
                                />
                            </div>
                        </div>
                        <Button value={<TiTick />} className='login_btn' />
                    </form>
                </div>
            </div>
            <div className='create_div' onClick={() => history.push('/')}>
                <Link className='create_link' to='/'>already have an account</Link>
            </div>
        </div>
    )
}

export default Signup