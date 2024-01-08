import React, { useEffect} from "react";
import Header from "./Header";
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import { message, message as MESSAGE } from "antd";
export const configJSON = require("../Components/Config");
const Review_Confirm_Add = () => {
    const navigate = useNavigate()
    // const userID = localStorage.getItem("user_id")

    const card_ID = useLocation().state.card_id
    
    console.log(card_ID,"card_id")
    useEffect(() => {
        HandleCardIndexwise()
    }, [])
    const HandleCardIndexwise = () => {
        
        axios({
            url: configJSON.baseUrl + configJSON.getAllCard_IndexWise+`/${card_ID}/`,
            method: "get",
        }).then((res) => {
            console.log(res, "res");
            
        }).catch((error) => {
            console.log(error);
        });
    }

    return (<div>
        <div class="ct_bg_img_2">
            <Header />
            <section class="pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="d-flex align-items-center gap-3 pt-4">
                                <h4 class="mb-0 text-white d-flex align-items-center gap-2">
                                    <a onClick={() => navigate("/add/funds")} class="ct_line_height_0">
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
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">Card •••• 5100</p>
                                        </div>
                                    </div>
                                    <div class="ct_responsive_flex ct_py_10 ct_border_btm">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_34363A_text_clr">FIRST NAME</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">John</p>
                                        </div>
                                    </div>
                                    <div class="ct_responsive_flex ct_py_10 ct_border_btm">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_34363A_text_clr">LAST NAME</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">Smith</p>
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
                                </div>
                                <div>
                                    <div class="ct_responsive_flex ct_py_10 ">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape  ct_fw_700">TOTAL ADD</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700">$40.00</p>
                                        </div>
                                    </div>
                                    <div class="ct_responsive_flex ct_py_10 ">
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_7C7D7E_text_clr ct_fw_700">AVAILABLE
                                                AFTER ADD</p>
                                        </div>
                                        <div class="w-50">
                                            <p class="mb-0 ct_white_space_nowrape ct_fw_700 ct_7C7D7E_text_clr">$28,740.80
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center gap-3 mt-4">
                                    <button class="ct_custom_btn ct_rounded_btn">CONFIRM & ADD
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
export default Review_Confirm_Add;