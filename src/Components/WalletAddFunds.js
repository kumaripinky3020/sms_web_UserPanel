import React from "react";
import { useNavigate } from 'react-router-dom'
import Header from "./Header";
const WalletAddFunds = () => {
    const navigate = useNavigate()

    return (
        <div>
            <div class="ct_bg_img_2">
               <Header/>
                <section class="pb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="d-flex align-items-center gap-3 pt-4">
                                    <h4 class="mb-0 text-white">ADD FUNDS</h4>
                                </div>
                                <div class="ct_white_bg mt-4">
                                    <p class="mb-0 pb-2 ct_border_btm ct_7C7D7E_text_clr">Select a Card</p>
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
                                                                d="M3 5.33333V18.6667H21V5.33333H3ZM0 2V22H24V2H0Z"
                                                                fill="#050505" />
                                                            <path d="M3 8H21V11H3V8Z" fill="#050505" />
                                                            <path
                                                                d="M4.5 14.5C4.5 13.3954 5.39543 12.5 6.5 12.5C7.60457 12.5 8.5 13.3954 8.5 14.5C8.5 15.6046 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 15.6046 4.5 14.5Z"
                                                                fill="#050505" />
                                                            <path
                                                                d="M8 14.5C8 13.3954 8.89543 12.5 10 12.5C11.1046 12.5 12 13.3954 12 14.5C12 15.6046 11.1046 16.5 10 16.5C8.89543 16.5 8 15.6046 8 14.5Z"
                                                                fill="#050505" />
                                                        </svg>
                                                    </div>
                                                    <div class="ct_card_num">
                                                        <p class="mb-0">Card •••• 4242</p>
                                                        <p class="mb-0 ct_white_space_nowrape ct_7C7D7E_text_clr">Transfer:
                                                            inmediate</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="ct_responsive_flex ct_py_16 ct_border_btm">
                                            <div class="ct_card_info_main w-50">
                                                <label class="radio-button">
                                                    <input type="radio" name="option" value="option1" />
                                                    <div class="radio-circle"></div>
                                                </label>
                                                <div class="ct_card_dtl">
                                                    <div class="ct_card_icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M3 5.33333V18.6667H21V5.33333H3ZM0 2V22H24V2H0Z"
                                                                fill="#050505" />
                                                            <path d="M3 8H21V11H3V8Z" fill="#050505" />
                                                            <path
                                                                d="M4.5 14.5C4.5 13.3954 5.39543 12.5 6.5 12.5C7.60457 12.5 8.5 13.3954 8.5 14.5C8.5 15.6046 7.60457 16.5 6.5 16.5C5.39543 16.5 4.5 15.6046 4.5 14.5Z"
                                                                fill="#050505" />
                                                            <path
                                                                d="M8 14.5C8 13.3954 8.89543 12.5 10 12.5C11.1046 12.5 12 13.3954 12 14.5C12 15.6046 11.1046 16.5 10 16.5C8.89543 16.5 8 15.6046 8 14.5Z"
                                                                fill="#050505" />
                                                        </svg>
                                                    </div>
                                                    <div class="ct_card_num">
                                                        <p class="mb-0">Card •••• 5100</p>
                                                        <p class="mb-0 ct_white_space_nowrape ct_7C7D7E_text_clr">Transfer:
                                                            inmediate</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div>
                                            <div class="ct_responsive_flex ct_py_16 ct_border_btm">
                                                <div class="ct_card_info_main w-50">

                                                    <a onClick={()=>navigate("/add/card")} class="ct_card_dtl">
                                                        <div class="">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                                viewBox="0 0 24 24" fill="none">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M10.5 13.5V22.5H13.5V13.5H22.5V10.5H13.5V1.5L10.5 1.5V10.5H1.5V13.5H10.5Z"
                                                                    fill="#1464F4" />
                                                            </svg>
                                                        </div>
                                                        <div class="ct_card_num">
                                                            <a onClick={()=>navigate("/add/new/card")}>
                                                                <p class="mb-0 ct_fw_700">ADD NEW PAYMENT METHOD</p>
                                                            </a>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="pt-3">
                                        <p class="mb-0 pb-2 ct_7C7D7E_text_clr">Deposit amount</p>
                                        <div class="position-relative">
                                            <input type="number" class="ct_half_input form-control ct_indent_20" />
                                            <span class="ct_dollar_sign">$</span>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-center gap-3 mt-4">
                                        <a onClick={()=>navigate("/wallet/review/confirm")} class="ct_custom_btn ct_rounded_btn">CONTINUE
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
    )
}
export default WalletAddFunds;