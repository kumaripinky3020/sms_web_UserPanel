import React, { useState } from 'react'
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5"
import { message, message as MESSAGE } from "antd";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import logo_color_typeright_png from "../img/logo-color-typeright.png"
export const configJSON = require("../Components/Config");

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEye, setIsEye] = useState(false)
    const [type, setType] = useState("password")

    const HandleLogin = (e) => {
        e.preventDefault()
        if (email && password) {
            const data = {
                email: email,
                password: password
            }
            console.log(data, "data")
            axios({
                url: configJSON.baseUrl + configJSON.login_api,
                method: "post",
                data: data,
            }).then((res) => {
                console.log(res, "response")
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message)
                    setPassword("");
                    setEmail("");
                    localStorage.setItem("user_id", res?.data?.user_id)
                    console.log(res?.data?.user_id, "userid")
                    navigate("/wallet")
                }
                else {
                    MESSAGE.error(res?.data?.message)
                }
            })
                .catch((error) => {
                    console.log(error)
                    setPassword("")
                    setEmail("")
                })
        }
        else {

            MESSAGE.error("Field can not be empty!")
        }
    }

    const handleEye = () => {
        var chtype = type == "text" ? "password" : "text"
        setType(chtype);
        setIsEye(!isEye)
    }

    return (<div>
        <div class="ct_login_main_bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6  mx-auto">
                        <div class="ct_login_form">
                            <form >
                                <div class="mb-5">
                                    <img src={logo_color_typeright_png} alt="img" class="ct_login_logo" />
                                    <h2 class="text-center mb-4 text-white">
                                        Brawlstreet
                                    </h2>
                                    <h4 class="text-center text-white">
                                        Wallet Log In
                                    </h4>

                                </div>
                                <div class="form-group">
                                    <div class="ct_input-group mb-4">
                                        <input required name="text" autocomplete="off" class="input" onChange={(e) => setEmail(e.target.value)} type="text" value={email} />
                                        <label class="user-label">Email</label>
                                    </div>
                                    <div class="ct_input-group ">
                                        <input required name="text" autocomplete="off" class="input" onChange={(e) => setPassword(e.target.value)} type={type} value={password} />
                                        <label class="user-label">Password</label>

                                        {
                                            isEye == false && <BsFillEyeSlashFill className="ct_show_eye" style={{color:"white"}} onClick={handleEye} />
                                        }
                                        {
                                            isEye && <IoEyeSharp className="ct_show_eye" style={{color:"white"}} onClick={handleEye} />
                                        }

                                    </div>
                                    <div class="text-end mt-3">
                                        <a onClick={() => navigate("/forgot/password")} class="text-white">Forgot Password?</a>
                                    </div>
                                </div>
                                <div class="text-center mt-5 mb-4" >
                                    <button class="ct_custom_btn" onClick={(e) => HandleLogin(e)} >Log In
                                    </button>
                                </div>
                                <p class="text-center text-white">Don't have an account? <a style={{ color: "#0d6efd" }} onClick={() => navigate("/signup")}>Sign up</a></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Login;