import React from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom'
const WithdrawStep2 = () => {
    const navigate = useNavigate()

    return <div>
        <div class="ct_bg_img_2">
            <Header />
            <section class="pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex align-items-center gap-3 pt-4">
                                <h4 class="mb-0 text-white d-flex align-items-center gap-2">
                                    <a onClick={() => navigate("/withdraw/step1")} class="ct_line_height_0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M8.12188 12L16.2034 3.91856L14.082 1.79724L3.87924 12L14.082 22.2028L16.2034 20.0815L8.12188 12Z"
                                                fill="white" />
                                        </svg>
                                    </a>
                                    PERSONAL INFORMATION
                                </h4>
                            </div>
                            <div class="ct_white_bg mt-4">
                                <div class="mb-4">
                                    <p class="mb-0 pb-2 ct_border_btm ct_7C7D7E_text_clr mb-4">Review and confirm your
                                        information</p>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="ct_7C7D7E_text_clr mb-1">First name</label>
                                                <input type="text" class="form-control ct_input_style" value="John" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="ct_7C7D7E_text_clr mb-1">Last name</label>
                                                <input type="text" class="form-control ct_input_style" value="Smith" />
                                            </div>
                                        </div>
                                        <div class="col-md-12 mb-3">
                                            <div class="form-group">
                                                <label class="ct_7C7D7E_text_clr mb-1">Address</label>
                                                <input type="text" class="form-control ct_input_style"
                                                    value="31-22 56th Street, Broadway Blvd." />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="ct_7C7D7E_text_clr mb-1">City</label>
                                                <input type="text" class="form-control ct_input_style"
                                                    value="New York City" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">

                                            <div class="row">
                                                <div class="col-md-6  mb-3">
                                                    <div class="form-group">
                                                        <label class="ct_7C7D7E_text_clr mb-1">State</label>
                                                        <select class="form-control ct_input_style">
                                                            <option value="">NY</option>
                                                            <option value="">NY</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-md-6  mb-3">
                                                    <div class="form-group">
                                                        <label class="ct_7C7D7E_text_clr mb-1">ZIP code</label>
                                                        <input type="text" class="form-control ct_input_style"
                                                            value="10023" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label class="ct_7C7D7E_text_clr mb-1">Social Security Number</label>
                                                <input type="number" class="form-control ct_input_style" value="400654456" />
                                            </div>
                                        </div>

                                    </div>

                                    <div class="ct_card_num mt-1">
                                        <p class="mb-0 ct_fw_700 ct_blue_text">WHY WE NEED THIS?</p>
                                    </div>

                                    <div class="ct_info_yellow_bg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M18 10H6V20H18V10ZM3 7V23H21V7H3Z" fill="#FFA800" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M10 6V8H7V6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V8H14V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6Z"
                                                fill="#FFA800" />
                                            <path d="M10.5 13.5H13.5V16.5H10.5V13.5Z" fill="#FFA800" />
                                        </svg>
                                        <p class="mb-0 ct_fw_700">All your personal information is secure.</p>
                                    </div>

                                </div>


                                <div class="d-flex align-items-center gap-3 mt-4">
                                    <a onClick={() => navigate("/withdraw/step3")} class="ct_custom_btn ct_rounded_btn">CONTINUE
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
export default WithdrawStep2;