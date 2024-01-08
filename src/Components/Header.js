import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import logo_color_typeright_png from "../img/logo-color-typeright.png"
const Header = () => {
    const navigate = useNavigate()
//   const[showFade,setShowFade]=useState()

    const OnHandleLogin = () => {
            navigate('/');
    }
    return (<div>
        <header>
            <div class="d-flex align-items-center justify-content-between flex-wrap">
                <div class="ct_top_left">
                    <a onClick={() => navigate("/my/wallet")} class="ct_transparent_btn">$ My Wallet</a>
                </div>
                <a onClick={() => navigate("/wallet")} class="ct_middle_logo">
                    <img src={logo_color_typeright_png} alt="" />
                </a>
                <div class="ct_top_right">
                    <ul class="ps-0  mb-0 d-flex align-items-center gap-3">
                        <li>
                            <a class="ct_transparent_btn"><i class="fa-regular fa-user"></i> Account</a>
                        </li>
                        <li>
                            <a data-bs-toggle="modal" data-bs-target="#ct_logout_confirm"> <i class="fa-solid fa-right-from-bracket text-white"></i></a>

                            {/* <a onClick={() => navigate("/")} data-bs-toggle="modal" data-bs-target="#ct_logout_confirm"> <i class="fa-solid fa-right-from-bracket text-white"></i></a> */}
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
    </div>)


}
export default Header;