import React from "react";
import logo_color_typeright_png from "../img/logo-color-typeright.png"
const CheckYourMail = () => {
    return (
        <div>
            <div class="ct_login_main_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-6  mx-auto">
                            <div class="ct_login_form">
                                <form action="#">
                                    <div class="py-4">
                                        <div class="mb-4">
                                            <div class="text-center">
                                                <img src={logo_color_typeright_png} style={{width: "100px;height: 100px;"}} alt=""/>
                                            </div>
                                        </div>
                                        <h2 class="text-center text-white mb-3">
                                            Check your email
                                        </h2>

                                        <p class="text-white text-center mb-4">We’ve sent you a confirmation email to <br/> the email address you provided:</p>
                                        <h5 class="text-center text-white mb-4">johnsmith@happy.com</h5>
                                        <p class="text-center text-white ">Please check and confirm your email before you <br/> can use the app.</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckYourMail;