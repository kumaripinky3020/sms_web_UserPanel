import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import Header from "./Header";
import { Country } from "country-state-city";
import axios from "axios";
import { message, message as MESSAGE } from "antd";
export const configJSON = require("../Components/Config");

const AddCard = () => {
    const navigate = useNavigate()

    const countryData = Country.getAllCountries()
    const [credit_card, setCredit_card] = useState()
    const [expiration_date, setExpiration_date] = useState()
    const [cvv, setCvv] = useState()
    const [first_name, setFirst_name] = useState()
    const [last_name, setLast_name] = useState()
    const [country, setCountry] = useState(countryData)
    const [singleCountry, setSingleCountry] = useState("")
    const [zip_code, setZip_code] = useState()
    const [seletedStates, setSelectedStates] = useState([])

    // const onHandleAddCard = (e) => {
    //     e.preventDefault()

    //     if (credit_card && expiration_date && cvv && first_name && last_name && country && zip_code) {
    //         const data = {
    //             payment_info: {
    //                 credit_card: credit_card,
    //                 expiration_date: expiration_date,
    //                 cvv: cvv
    //             },

    //             bill_info: {
    //                 first_name: first_name,
    //                 last_name: last_name,
    //                 country: country,
    //                 zip_code: zip_code
    //             }
    //         }
    //         axios({
    //             url: configJSON.baseUrl + configJSON.addCardDetails,
    //             method: "post",
    //             data: data,
    //         }).then((res) => {
    //             console.log(res, "res")
    //             if (res?.data?.success == true) {
    //                 MESSAGE.success(res?.data?.message)
    //                 setCredit_card("")
    //                 setExpiration_date("")
    //                 setCvv("")
    //                 setFirst_name("")
    //                 setLast_name("")
    //                 setSingleCountry("")
    //                 setZip_code("")
    //             }
    //             else {
    //                 MESSAGE.error(res?.data?.message)
    //             }
    //         })
    //             .catch((error) => {
    //                 console.log(error)
    //                 setCredit_card("")
    //                 setExpiration_date("")
    //                 setCvv("")
    //                 setFirst_name("")
    //                 setLast_name("")
    //                 setSingleCountry("")
    //                 setZip_code("")
    //             })
    //     }
    //     else {

    //         MESSAGE.error("Field can not be empty!")
    //     }
    // }
    // const HandleState = (e) => {

    //     var isoCode = country[e?.target?.value]?.name
    //     setSingleCountry(country[e?.target?.value]?.name)
    //     var arr = []

    //     country.map((item) => {
    //         isoCode == item?.countryCode && arr.push(item?.name)
    //     })
    //     console.log(country, "country")
    //     console.log(isoCode, "isoCode")
    // }

    const onHandleAddCard = (e) => {
        e.preventDefault();

        if (credit_card && expiration_date && cvv && first_name && last_name && country && zip_code) {
            const selectedCountry = country.find(item => item.name === singleCountry);
            const data = {
                payment_info: {
                    credit_card: credit_card,
                    expiration_date: expiration_date,
                    cvv: cvv
                },
                bill_info: {
                    first_name: first_name,
                    last_name: last_name,
                    country: selectedCountry?.name || "",
                    zip_code: zip_code
                }
            };

            axios({
                url: configJSON.baseUrl + configJSON.addCardDetails,
                method: "post",
                data: data,
            }).then((res) => {
                console.log(res, "res");
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message);
                    setCredit_card("");
                    setExpiration_date("");
                    setCvv("");
                    setFirst_name("");
                    setLast_name("");
                    setSingleCountry("");
                    setZip_code("");
                    navigate("/add/funds")
                } else {
                    MESSAGE.error(res?.data?.message);
                }
            })
                .catch((error) => {
                    console.log(error);
                    setCredit_card("");
                    setExpiration_date("");
                    setCvv("");
                    setFirst_name("");
                    setLast_name("");
                    setSingleCountry("");
                    setZip_code("");
                });
        } else {
            MESSAGE.error("Field can not be empty!");
        }
    };

    const HandleState = (e) => {
        const selectedCountryName = country[e?.target?.value]?.name;
        setSingleCountry(selectedCountryName);
        console.log(selectedCountryName, "selectedCountryName");
    };



    return (<div>
        <body>
            <div class="ct_bg_img_2">
                <Header />
                <section class="pb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="d-flex align-items-center gap-3 pt-4">
                                    <h4 class="mb-0 text-white">ADD CARD</h4>
                                </div>
                                <div class="ct_white_bg mt-4">
                                    <div class="mb-4">
                                        <h5 class="ct_fw_700 pb-3">Payment info</h5>
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <div class="form-group">
                                                    <label class="ct_7C7D7E_text_clr mb-1">Credit card</label>
                                                    <input type="number" class="form-control ct_input_style" onChange={(e) => setCredit_card(e.target.value)} value={credit_card}
                                                    />
                                                </div>
                                            </div>
                                            <div class="col-md-6 ">
                                                <div class="row">
                                                    <div class="col-md-6 mb-3">
                                                        <div class="form-group">
                                                            <label class="ct_7C7D7E_text_clr mb-1">Exo. date</label>
                                                            <input type="text" class="form-control ct_input_style" onChange={(e) => setExpiration_date(e.target.value)} value={expiration_date}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 mb-3">
                                                        <div class="form-group">
                                                            <label class="ct_7C7D7E_text_clr mb-1">CVV</label>
                                                            <div class="position-relative">
                                                                <input type="text" class="form-control ct_input_style" onChange={(e) => setCvv(e.target.value)} value={cvv}
                                                                />
                                                                <div class="ct_cvv_icon_position">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                        height="24" viewBox="0 0 24 24" fill="none">
                                                                        <path d="M10.5 6H13.5V9H10.5V6Z" fill="#AAAAAB" />
                                                                        <path d="M10.5 11H13.5V18H10.5V11Z" fill="#AAAAAB" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                                                            fill="#AAAAAB" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div>
                                        <h5 class="ct_fw_700 pb-3">Billing info</h5>
                                        <div class="row">
                                            <div class="col-md-6 mb-3">
                                                <div class="form-group">
                                                    <label class="ct_7C7D7E_text_clr mb-1">First name</label>
                                                    <input type="text" class="form-control ct_input_style" onChange={(e) => setFirst_name(e.target.value)} value={first_name} />
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <div class="form-group">
                                                    <label class="ct_7C7D7E_text_clr mb-1">Last name</label>
                                                    <input type="text" class="form-control ct_input_style" onChange={(e) => setLast_name(e.target.value)} value={last_name} />
                                                </div>
                                            </div>

                                            <div class="col-md-6 mb-3">

                                                <div class="form-group">
                                                    <label class="ct_7C7D7E_text_clr mb-1">Country</label>
                                                    <select class="form-control ct_input_style" onClick={(e) => HandleState(e)}>
                                                        <option >Country</option>
                                                        {country.map((item, i) => (
                                                            <option value={i} >{item.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-3">
                                                <div class="form-group">
                                                    <label class="ct_7C7D7E_text_clr mb-1">ZIP code</label>
                                                    <input type="number" class="form-control ct_input_style" onChange={(e) => setZip_code(e.target.value)} value={zip_code} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center gap-3 mt-4">
                                        <button class="ct_custom_btn ct_rounded_btn" onClick={(e) => onHandleAddCard(e)}>SAVE
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"></script>
        </body>

    </div>)
}
export default AddCard;