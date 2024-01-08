import React from "react";
import logo_color_typeright_png from "../img/logo-color-typeright.png"
const EmailConfirmed = () => {
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
                                                <img src={logo_color_typeright_png} style={{ width: "100px;height: 100px;" }} alt="" />

                                            </div>
                                        </div>
                                        <h2 class="text-center text-white mb-3">
                                            Email confirmed
                                        </h2>

                                        <p class="text-white text-center mb-0">You can now use your log in credentials to <br /> access the app.</p>
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
export default EmailConfirmed;