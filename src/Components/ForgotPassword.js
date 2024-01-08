import React, { useState } from 'react'
import { message, message as MESSAGE } from "antd";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const configJSON = require("../Components/Config");


const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');

    const HandleForgetPassword = (e) => {
        e.preventDefault()
        if (email) {
            const data = {
                email: email,
            }
            axios({
                url: configJSON.baseUrl + configJSON.forget_password,
                method: "post",
                data: data,
            }).then((res) => {
                console.log(res, "res")
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message)
                    setEmail("");
                    navigate("/")
                }
                else {
                    MESSAGE.error(res?.data?.message)
                }
            })
                .catch((error) => {
                    console.log(error)
                    setEmail("")
                })
        }
        else {

            MESSAGE.error("Field can not be empty!")
        }
    }

    return (<div>
        <div class="ct_login_main_bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6  mx-auto">
                        <div class="ct_login_form">
                            <form action="#">
                                <div class="mb-5">
                                    <h2 class="text-center mb-4 text-white">
                                        Brawlstreet
                                    </h2>
                                    <h4 class="text-center text-white">
                                        Forgot Password
                                    </h4>
                                </div>

                                <div class="form-group">

                                    <div class="ct_input-group mb-4">
                                        <input required type="text" name="text" autocomplete="off" class="input" onChange={(e) => setEmail(e.target.value)} value={email} />
                                        <label class="user-label">Email</label>
                                    </div>
                                </div>

                                <div class="text-center mt-5">
                                    <button class="ct_custom_btn" onClick={(e) => HandleForgetPassword(e)}>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default ForgotPassword;