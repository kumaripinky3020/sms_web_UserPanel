import React from "react";
import Header from "./Header";
const Add_New_Card=()=>{
return(<div>
    <Header/>
    <section class="pb-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="d-flex align-items-center gap-3 pt-4">
                            <h4 class="mb-0 text-white">ADD CARD</h4>
                        </div>
                        <div class="ct_white_bg mt-4">
                            <div class="mb-4">
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <div class="form-group  ">
                                            <label class=" mb-1">Credit card</label>
                                            <input type="number" class="form-control ct_input_style"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <div class="form-group mb-3">
                                            <label class=" mb-1">Exo. date</label>
                                            <input type="text" class="form-control ct_input_style"/>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <div class="form-group mb-3">
                                            <label class=" mb-1">CVV</label>
                                            <input type="text" class="form-control ct_input_style"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group mb-3">
                                            <label class=" mb-1">First name</label>
                                            <input type="text" class="form-control ct_input_style"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group mb-3">
                                            <label class=" mb-1">Last name</label>
                                            <input type="text" class="form-control ct_input_style"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group mb-3">
                                            <label class=" mb-1">Country</label>
                                            <input type="text" class="form-control ct_input_style"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <div class="form-group">
                                            <label class=" mb-1">ZIP code</label>
                                            <input type="number" class="form-control ct_input_style"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-3 mt-4">
                                <button class="ct_custom_btn ct_rounded_btn">SAVE
                                </button>
                                <button class="ct_custom_btn ct_rounded_btn ct_cancel_btn">CANCEL
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
</div>)
}
export default Add_New_Card;