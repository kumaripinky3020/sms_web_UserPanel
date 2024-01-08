import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import AddCard from './Components/AddCard';
import MyWallet from './Components/MyWallet';
import WalletAddFunds from './Components/WalletAddFunds';
import Wallet_Withdraw from './Components/Wallet_Withdraw';
import Header from './Components/Header';
import WalletReviewConform from './Components/WalletReview&Confirm';
import AddFunds from './Components/AddFunds';
import Add_New_Card from './Components/Add_New_Card';
import Review_Confirm_Add from './Components/Review_Confirm_Add';
import Review_Confirm from './Components/Review_Confirm';
import Wallet from './Components/Wallet';
import WithdrawStep1 from './Components/WithdrawStep1';
import WithdrawStep2 from './Components/WithdrawStep2';
import WithdrawStep3 from './Components/WithdrawStep3';
import Signup from './Components/Signup';
import DateHandle from './Components/Date';
// import EmailConfirmed from './Components/EmailConfirmed';
// import CheckYourMail from './Components/CheckYourMail';
const App = () => {
  return (<div>
    <Router basename='/'>
      <Routes>

        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/wallet' element={<Wallet />} />
        <Route exact path='/forgot/password' element={<ForgotPassword />} />
        <Route exact path='/add/card' element={<AddCard />} />
        <Route exact path='/add/new/card' element={<Add_New_Card />} />
        <Route exact path='/add/funds' element={<AddFunds />} />
        <Route exact path='/my/wallet' element={<MyWallet />} />
        <Route exact path='/wallet/add/fund' element={<WalletAddFunds />} />
        <Route exact path='/wallet/withdraw' element={<Wallet_Withdraw />} />
        <Route exact path='/header' element={<Header />} />
        <Route exact path='/wallet/review/confirm' element={<WalletReviewConform />} />
        <Route exact path='/review/confirm/add' element={<Review_Confirm_Add />} />
        <Route exact path='/review/confirm' element={<Review_Confirm />} />
        <Route exact path='/withdraw/step1' element={<WithdrawStep1 />} />
        <Route exact path='/withdraw/step2' element={<WithdrawStep2 />} />
        <Route exact path='/withdraw/step3' element={<WithdrawStep3 />} />
        <Route exact path='/handle/date' element={<DateHandle />} />

        {/* <Route exact path='/email/confirmed' element={<EmailConfirmed />} /> */}
        {/* <Route exact path='/check/your/mail' element={<CheckYourMail />} /> */}

      </Routes>
    </Router>
  </div>)
}
export default App;