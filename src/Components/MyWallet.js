import React from "react";
import { useNavigate } from 'react-router-dom'

const MyWallet = () => {
    const navigate = useNavigate()

    const OnHandleLogin = () => {
        navigate('/');
    }

    return (<div>
        <header>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="ct_top_left">
                    <h4 class="text-white mb-0">SSONALO</h4>
                </div>
                <div class="ct_top_right">
                    <ul class="ps-0  mb-0 d-flex align-items-center gap-3">
                        <li>
                            {/* <a > <i class="fa-solid fa-right-from-bracket text-white"></i></a> */}
                            <a data-bs-toggle="modal" data-bs-target="#ct_logout_confirm"> <i class="fa-solid fa-right-from-bracket text-white"></i></a>

                        </li>
                    </ul>
                </div>
            </div>
        </header>

        <div class="modal fade" id="ct_logout_confirm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header border-0 pb-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body border-0 pt-3 pb-0">
                        <h4>Are you sure to logout?</h4>
                    </div>
                    <div class="modal-footer justify-content-center border-0 pt-2">
                        <button type="button" class="ct_custom_btn  ct_green_btn  ct_close_btn" data-bs-dismiss="modal">No</button>
                        <button type="button" class="ct_custom_btn  ct_green_btn" data-bs-dismiss="modal" onClick={OnHandleLogin} >Yes</button>
                    </div>
                </div>
            </div>
        </div>
        <section class="pb-5">
            <div class="container">
                <div class="row mt-4">
                    <div class="col-md-12 mb-4">
                        <div class="ct_card">
                            <h4>My Wallet</h4>
                            <h5 class="ct_green_text"> $9947.00</h5>
                        </div>

                    </div>
                    <div class=" col-md-6 mb-4">
                        <div class="ct_card">
                            <h4 class="ct_text_opacity">Deposits</h4>
                            <h5 class="text-white">$10097.00</h5>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div class="ct_card">
                            <h4 class="ct_text_opacity">Withdraw</h4>
                            <h5 class="text-white">$0.00</h5>
                        </div>
                    </div>
                    <div class=" col-md-6 mb-4">
                        <div class="ct_card">
                            <h4 class="ct_text_opacity">Refferals Earned</h4>
                            <h5 class="text-white">$0.00</h5>
                        </div>
                    </div>
                    <div class=" col-md-6 mb-4">
                        <div class="ct_card">
                            <h4 class="ct_text_opacity">Entry Fee & Winning</h4>
                            <h5 class="text-white">$-150.00</h5>
                        </div>
                    </div>
                </div>


                <div class="ct_table">
                    <div class="table-responsive ">
                        <h4 class="p-4 pb-2 ct_7C7D7E_text_clr ct_fw_600">TRANSACTION HISTORY</h4>
                        <table class="table ">

                            <tbody>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z"
                                                fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Added funds
                                    </td>
                                    <td>•••• 4321</td>
                                    <td class="ct_green_text ct_fw_600">+$40.00</td>
                                    <td>10/13/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z"
                                                fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Added funds
                                    </td>

                                    <td>•••• 5100</td>
                                    <td class="ct_green_text ct_fw_600">+$10.000,00</td>
                                    <td>10/09/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z"
                                                fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Added funds
                                    </td>
                                    <td>•••• 5100</td>
                                    <td class="ct_green_text ct_fw_600">+1.00</td>
                                    <td>10/09/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path d="M17 10.5H7V13.5L17 13.5V10.5Z" fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Entry Fee
                                    </td>
                                    <td>StockPrice</td>
                                    <td class="text-danger ct_fw_600">-$100.00</td>
                                    <td>10/02/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path d="M17 10.5H7V13.5L17 13.5V10.5Z" fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Entry Fee
                                    </td>
                                    <td>LongGame</td>
                                    <td class="text-danger ct_fw_600">-$50.00</td>
                                    <td>09/24/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z"
                                                fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Added funds
                                    </td>
                                    <td>•••• 4321</td>
                                    <td class="ct_green_text ct_fw_600">+$40.00</td>
                                    <td>10/13/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z"
                                                fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Added funds
                                    </td>
                                    <td>•••• 4321</td>
                                    <td class="ct_green_text ct_fw_600">+$40.00</td>
                                    <td>10/13/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z"
                                                fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Added funds
                                    </td>
                                    <td>•••• 4321</td>
                                    <td class="ct_green_text ct_fw_600">+$40.00</td>
                                    <td>10/13/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path d="M17 10.5H7V13.5L17 13.5V10.5Z" fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Entry Fee
                                    </td>
                                    <td>StockPrice</td>
                                    <td class="text-danger ct_fw_600">-$100.00</td>
                                    <td>10/02/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2">
                                        <svg class="ct_grey_svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <path d="M17 10.5H7V13.5L17 13.5V10.5Z" fill="#050505" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                fill="#050505" />
                                        </svg>
                                        Entry Fee
                                    </td>
                                    <td>LongGame</td>
                                    <td class="text-danger ct_fw_600">-$50.00</td>
                                    <td>09/24/2020</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex align-items-center gap-3 ct_grey_bg_clr">
                        <a class="ct_custom_btn " onClick={() => navigate("/wallet/add/fund")}>ADD FUNDS
                        </a>
                        <a class="ct_custom_btn  ct_green_btn" onClick={() => navigate("/wallet/withdraw")}>WITHDRAW
                        </a>
                    </div>
                </div>

            </div>
        </section>
    </div>)
}
export default MyWallet;