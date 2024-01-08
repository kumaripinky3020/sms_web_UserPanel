import React from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom'
const Wallet = () => {
    const navigate = useNavigate()
    return (<div>
        <Header />
        <section class="pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="d-flex align-items-center justify-content-between flex-wrap pt-4 gap-3">
                            <div class="d-flex align-items-center gap-3">
                                <h4 class="mb-0 text-white">My wallet</h4>
                                <h4 class="mb-0 ct_green_text">$9,947.00</h4>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                                <a class="ct_custom_btn ct_btn_radius_100" onClick={() => navigate("/add/funds")}>Add Funds
                                </a>
                                <a class="ct_custom_btn ct_btn_radius_100 ct_green_btn" onClick={()=>navigate("/withdraw/step1")}>Withdraw
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="ct_card">
                            <h4>$10,097.00</h4>
                            <p>Deposits</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="ct_card">
                            <h4>$0.00</h4>
                            <p>Refferals earned</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="ct_card">
                            <h4>$0.00</h4>
                            <p>Withdraws</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="ct_card">
                            <h4>$-150.00</h4>
                            <p>Entry fee & winning</p>
                        </div>
                    </div>
                </div>
                <div class="ct_table">
                    <div class="table-responsive ">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>TRANSACTION HISTORY</th>
                                    <th>FROM</th>
                                    <th>AMOUNT</th>
                                    <th>DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Added funds
                                    </td>
                                    <td>•••• 4321</td>
                                    <td class="ct_green_text ct_fw_600">+$40.00</td>
                                    <td>10/13/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Added funds
                                    </td>
                                    <td>•••• 5100</td>
                                    <td class="ct_green_text ct_fw_600">+$10.000,00</td>
                                    <td>10/09/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Added funds
                                    </td>
                                    <td>•••• 5100</td>
                                    <td class="ct_green_text ct_fw_600">+1.00</td>
                                    <td>10/09/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Entry Fee
                                    </td>
                                    <td>StockPrice</td>
                                    <td class="text-danger ct_fw_600">-$100.00</td>
                                    <td>10/02/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Entry Fee
                                    </td>
                                    <td>LongGame</td>
                                    <td class="text-danger ct_fw_600">-$50.00</td>
                                    <td>09/24/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Added funds
                                    </td>
                                    <td>•••• 4321</td>
                                    <td class="ct_green_text ct_fw_600">+$40.00</td>
                                    <td>10/13/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Added funds
                                    </td>
                                    <td>•••• 4321</td>
                                    <td class="ct_green_text ct_fw_600">+$40.00</td>
                                    <td>10/13/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Added funds
                                    </td>
                                    <td>•••• 4321</td>
                                    <td class="ct_green_text ct_fw_600">+$40.00</td>
                                    <td>10/13/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M13.5 7H10.5V10.5H7V13.5H10.5V17H13.5V13.5H17V10.5H13.5V7Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Entry Fee
                                    </td>
                                    <td>StockPrice</td>
                                    <td class="text-danger ct_fw_600">-$100.00</td>
                                    <td>10/02/2020</td>
                                </tr>
                                <tr>
                                    <td class="d-flex align-items-center gap-2 ct_fw_600">
                                        <div class="ct_plus_icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M17 10.5H7V13.5L17 13.5V10.5Z" fill="#050505" />
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5ZM12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5Z"
                                                    fill="#050505" />
                                            </svg>
                                        </div>
                                        Entry Fee
                                    </td>
                                    <td>LongGame</td>
                                    <td class="text-danger ct_fw_600">-$50.00</td>
                                    <td>09/24/2020</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>)
}
export default Wallet;