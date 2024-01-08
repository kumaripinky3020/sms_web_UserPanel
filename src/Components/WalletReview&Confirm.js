import React from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom'
const WalletReviewConform = () => {
    const navigate = useNavigate()

    return (<div>
        <div class="ct_bg_img_2">
            <Header />
            <section class="pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex align-items-center gap-3 pt-4">
                                <h4 class="mb-0 text-white d-flex align-items-center gap-2">
                                    <a onClick={()=>navigate("/wallet/add/fund")} class="ct_line_height_0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M8.12188 12L16.2034 3.91856L14.082 1.79724L3.87924 12L14.082 22.2028L16.2034 20.0815L8.12188 12Z"
                                                fill="white" />
                                        </svg>
                                    </a>REVIEW & CONFIRM
                                </h4>
                            </div>
                            <div class="ct_white_bg mt-4">
                                <p class="mb-0 pb-2 ct_border_btm ct_7C7D7E_text_clr">Review and confirm your information
                                </p>
                                <div>
                                    <div class="ct_responsive_flex ct_py_10 ct_border_btm">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_34363A_text_clr">ADD FROM</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">Card•••• </p>
                                        </div>
                                    </div>
                                    <div class="ct_responsive_flex ct_py_10 ct_border_btm">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_34363A_text_clr">FIRST NAME</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">Sab</p>
                                        </div>
                                    </div>
                                    <div class="ct_responsive_flex ct_py_10 ct_border_btm">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_34363A_text_clr">LAST NAME</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">Sol</p>
                                        </div>
                                    </div>
                                    <div class="ct_responsive_flex ct_py_10 ct_border_btm">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_34363A_text_clr">COUNTRY</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">United States</p>
                                        </div>
                                    </div>
                                    <div class="ct_responsive_flex ct_py_10 ct_border_btm">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_34363A_text_clr">ZIP CODE</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">1232</p>
                                        </div>
                                    </div>
                                    <div class="ct_responsive_flex ct_py_10 ">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape  ct_fw_700">TOTAL ADD</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">$40.00</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center gap-3 mt-4 ct_responsive_btn">
                                    <button class="ct_custom_btn ct_rounded_btn w-auto px-4">CONFIRM & ADD
                                    </button>
                                    <button class="ct_custom_btn ct_rounded_btn ct_cancel_btn">CANCEL
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    </div>)
}
export default WalletReviewConform;