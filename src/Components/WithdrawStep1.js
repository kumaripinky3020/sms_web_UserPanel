import React from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom'
const WithdrawStep1 = () => {
    const navigate = useNavigate()

    return <div>
        <div class="ct_bg_img_2">
            <Header />
            <section class="pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex align-items-center gap-3 pt-4">
                                <h4 class="mb-0 text-white">WITHDRAW</h4>
                            </div>
                            <div class="ct_white_bg mt-4">
                                <p class="mb-0 pb-2 ct_border_btm ct_7C7D7E_text_clr">Select method</p>
                                <div>
                                    <div class="ct_responsive_flex ct_py_16 ct_border_btm">
                                        <div class="ct_card_info_main w-50">
                                            <label class="radio-button">
                                                <input type="radio" name="option" value="option1" checked />
                                                <div class="radio-circle"></div>
                                            </label>
                                            <div class="ct_card_dtl">
                                                <div class="ct_card_icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M21 4H3V20H21V4ZM0 1V23H24V1H0Z" fill="#1464F4" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M9.93737 9.71359C9.59159 9.22877 9.06648 8.97881 8.54256 9.00144C8.52818 9.00206 8.51379 9.00238 8.49939 9.00238C7.45161 9.00238 7 9.64619 7 10.0012C7 10.3572 7.45165 11.0013 8.49939 11.0013C10.2108 11.0013 12 12.1451 12 13.9988C12 15.8441 10.2266 16.9881 8.52083 16.9976C7.29513 17.043 6.14784 16.4499 5.43313 15.4478L7.06142 14.2864C7.4072 14.7713 7.9323 15.0212 8.45623 14.9986C8.47061 14.998 8.485 14.9977 8.49939 14.9977C9.54827 14.9977 10 14.3526 10 13.9988C10 13.6458 9.54918 13.0013 8.49939 13.0013C6.78593 13.0013 5 11.8546 5 10.0012C5 8.15452 6.77349 7.01194 8.47796 7.00244C9.70366 6.95699 10.851 7.55018 11.5657 8.55227L9.93737 9.71359Z"
                                                            fill="#1464F4" />
                                                        <path d="M7.5 6H9.5V8H7.5V6Z" fill="#1464F4" />
                                                        <path d="M7.5 16H9.5V18H7.5V16Z" fill="#1464F4" />
                                                        <path d="M14 9H17V11H14V9Z" fill="#1464F4" />
                                                        <path d="M14 13H19V15H14V13Z" fill="#1464F4" />
                                                    </svg>
                                                </div>
                                                <div class="ct_card_num">
                                                    <p class="mb-0">By check •••• XX000123</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_7C7D7E_text_clr">Transfer within 1-2
                                                weeks</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="pt-3">
                                    <p class="mb-0 pb-2 ct_7C7D7E_text_clr">Amount to withdraw</p>
                                    <div class="position-relative">
                                        <input type="number" class="ct_half_input form-control ct_indent_20" value="40.00" />
                                        <span class="ct_dollar_sign">$</span>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center gap-3 mt-4">
                                    <a onClick={() => navigate("/withdraw/step2")} class="ct_custom_btn ct_rounded_btn">CONTINUE
                                    </a>
                                    <button class="ct_custom_btn ct_rounded_btn ct_cancel_btn">CANCEL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>
}
export default WithdrawStep1;