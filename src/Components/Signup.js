import React, { useEffect, useState } from "react";
import { Country } from "country-state-city";
import { State } from "country-state-city";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5"
import logo_color_typeright_png from "../img/logo-color-typeright.png"
import { useNavigate } from 'react-router-dom'
import { message, message as MESSAGE } from "antd";
import axios from 'axios'
export const configJSON = require("../Components/Config");
const Signup = () => {
    const navigate = useNavigate()
    const countryData = Country.getAllCountries()
    const stateData = State.getAllStates()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [dob, setDob] = useState()
    const [country, setCountry] = useState(countryData)
    const [singleCountry, setSingleCountry] = useState("")
    const [state, setState] = useState(stateData)
    const [singleState, setSingleState] = useState("")
    const [seletedStates, setSelectedStates] = useState([])
    const [username, setUsername] = useState()
    const [isEye, setIsEye] = useState(false)
    const [type, setType] = useState("password")
    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState(null);

    // const handleChange = (name) => (event) => {
    //     setDateError(null);
    //     setDate({ ...date, [name]: event.target.value });
    // };

    // const handleDateChange = (e) => {
    //     const selectedDate = new Date(e.target.value);
    //     const today = new Date();
    //     today.setHours(0, 0, 0, 0);

    //     if (selectedDate > today) {
    //         // Selected date is greater than today, set an error
    //         setDateError("Selected date cannot be greater than today");
    //     } else {
    //         // Selected date is valid, update the state and clear the error
    //         setDateError(null);
    //         setDate(selectedDate);
    //     }
    // };

    const handleChange = (name) => (event) => {
        setDateError(null);
        setDate(event.target.value);
    };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate > today) {
            // Selected date is greater than today, set an error
            setDateError("Selected date cannot be greater than today");
        } else {
            // Selected date is valid, update the state and clear the error
            setDateError(null);
            setDate(selectedDate.toISOString().split("T")[0]);
        }
    };
    const HandleSignupButton = (e) => {

        e.preventDefault()
        if (email && password && date && country && state && username) {
            const data = {
                email: email,
                password: password,
                dob: date,
                country: singleCountry,
                state: singleState,
                username: username
            }

            axios({
                url: configJSON.baseUrl + configJSON.signup_api,
                method: "post",
                data: data,
            }).then((res) => {
                console.log(res, "ress")
                if (res?.data?.success == true) {
                    MESSAGE.success(res?.data?.message)
                    setPassword("");
                    setEmail("");
                    // setDob("");
                    setDate("")
                    setSingleState("")
                    setSingleCountry("")
                    setUsername("");
                    navigate("/")
                }
                else {
                    MESSAGE.error(res?.data?.message)
                }
            })
                .catch((error) => {
                    console.log(error)
                    setPassword("")
                    setEmail("")
                    // setDob("");
                    setDate("")
                    setSingleState("")
                    setSingleCountry("")
                    setUsername("");
                })
        }
        else {
            MESSAGE.error("Field can not be empty!")
        }
    }
    const handleEye = () => {
        var chtype = type == "text" ? "password" : "text"
        setType(chtype);
        setIsEye(!isEye)
    }

    const HandleState = (e) => {
        var isoCode = country[e?.target?.value]?.isoCode
        setSingleCountry(country[e?.target?.value]?.name)
        var arr = []

        state.map((item) => {
            isoCode == item?.countryCode && arr.push(item?.name)
        })
        setSelectedStates(arr)
    }

    return (<div>
        <div class="ct_login_main_bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-md-6  mx-auto">
                        <div class="ct_login_form">
                            <form >
                                <div class="mb-4">
                                    <img src={logo_color_typeright_png} alt="img" class="ct_login_logo" />
                                    <h2 class="text-center mb-4 text-white ct_fs_32">
                                        Brawlstreet
                                    </h2>
                                    <h4 class="text-center text-white ct_fs_24">
                                        Wallet Sign Up
                                    </h4>
                                </div>

                                <div class="form-group">
                                    <div class="ct_input-group mb-3">
                                        <input required type="text" name="text" autocomplete="off" class="input" onChange={(e) => setUsername(e.target.value)} value={username} />
                                        <label class="user-label">Full Name</label>
                                    </div>
                                    <div class="ct_input-group mb-3">
                                        <input required type="text" name="text" autocomplete="off" class="input" onChange={(e) => setEmail(e.target.value)} value={email} />
                                        <label class="user-label">Email</label>
                                    </div>
                                    <div class="ct_input-group mb-3">
                                        {/* <input required type="date" name="text" autocomplete="off" class="input" onChange={(e) => setDob(e.target.value)} value={dob} /> */}
                                        {/* <label class="user-label">Dob</label>  */}

                                        <input required type="date" name="text" autoComplete="off" class="input" value={date} onChange={handleChange("date")}
                                            max={new Date().toISOString().split("T")[0]}
                                        />

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="ct_input-group mb-3">

                                                <select class="input ct_select_option" onClick={(e) => HandleState(e)}>
                                                    <option >Country</option>
                                                    {country.map((item, i) => (
                                                        <option value={i} >{item.name}</option>
                                                    ))}
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="ct_input-group mb-3">
                                                <select class="input ct_select_option" onClick={(e) => setSingleState(e.target.value)}>
                                                    <option >State</option>
                                                    {
                                                        seletedStates.map((val) => (
                                                            <option >{val}</option>
                                                        ))
                                                    }
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="ct_input-group mb-3">
                                        <input required type={type} name="text" autocomplete="off" class="input" onChange={(e) => setPassword(e.target.value)} value={password} />
                                        <label class="user-label">Password</label>
                                        {
                                            isEye == false && <BsFillEyeSlashFill className="ct_show_eye" style={{ color: "white" }} onClick={handleEye} />
                                        }
                                        {
                                            isEye && <IoEyeSharp className="ct_show_eye" style={{ color: "white" }} onClick={handleEye} />
                                        }
                                    </div>

                                </div>
                                <div class="text-center mt-4 mb-3">
                                    <button class="ct_custom_btn" onClick={(e) => HandleSignupButton(e)} >Sign Up
                                    </button>
                                </div>
                                <p class="text-center text-white">Already have an account? <a style={{ color: "#0d6efd" }} onClick={() => navigate("/")}>Login</a></p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Signup;