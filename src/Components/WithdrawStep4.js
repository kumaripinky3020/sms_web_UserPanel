import React from "react";
import logo_color_typeright_png from "../img/logo-color-typeright.png"
import { useNavigate } from 'react-router-dom'
const WithdrawStep4 = () => {
    const navigate = useNavigate()

    return <div>
        <div class="ct_bg_img_2">
            <header>
                <div class="d-flex align-items-center justify-content-center">
                    <a onClick={()=>navigate("/wallet")} class="ct_middle_logo">
                        <img src={logo_color_typeright_png} alt="" />
                    </a>
                </div>
            </header>
            <section class="pb-5 pt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-6  mx-auto">
                            <div class="ct_login_form">
                                <form onClick={()=>navigate("/my/wallet")}>
                                    <div class="mb-5">
                                        <h4 class="text-center text-white">
                                            Wallet log in
                                        </h4>
                                    </div>
                                    <div class="form-group">

                                        <div class="ct_input-group mb-4">
                                            <input required="" type="email" name="text" autocomplete="off" class="input" />
                                            <label class="user-label">Email</label>
                                        </div>
                                        <div class="ct_input-group ">
                                            <input required="" type="password" name="text" autocomplete="off" class="input" />
                                            <label class="user-label">Password</label>
                                        </div>
                                        <div class="text-end mt-3">

                                            <a onClick={()=>navigate("/forgot/password")} class="text-white">Forgot Password?</a>
                                        </div>

                                    </div>

                                    <div class="text-center mt-5">
                                        <button class="ct_custom_btn">Log In
                                        </button>
                                    </div>

                                </form>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>
}
export default WithdrawStep4;