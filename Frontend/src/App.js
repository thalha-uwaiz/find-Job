import React from 'react'
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import SignIn2 from './Components/SignIn2/SignIn2';
import SignIn3 from './Components/SignIn3/SignIn3';
import SignIn4 from './Components/SignIn4/SignIn4';
import SignUp5 from './Components/SignUp5/SignUp5';
import Welcome7 from './Components/Welcome7/Welcome7';
import SignUp6 from './Components/SignUp6/SignUp6';
import CreateJob8 from './Components/CreateJob8/CreateJob8';
import CreateJob9 from './Components/CreateJob9/CreateJob9';
import CreateJob10 from './Components/CreateJob10/CreateJob10';
import CreateJob11 from './Components/CreateJob11/CreateJob11';
import VerifyPhone12 from './Components/VerifyPhone12/VerifyPhone12';
import VerifyPhone13 from './Components/VerifyPhone13/VerifyPhone13';
import Verifed14 from './Components/Verified14/Verified14';
import Congratulations15 from './Components/Congrajulations15/Congrajulations15';
import Homepage16 from './Components/HomePage16/HomePage16';
import Homepage17 from './Components/HomePage17/HomePage17';
import Homepage18 from './Components/HomePage18/HomePage18';
import Homepage19 from './Components/HomePage19/HomePage19';
import Candidate20 from './Components/Candidate20/Candidate20';
import ScheduleInterview21 from './Components/ScheduleInterview21/ScheduleInterview21';
import NoMatch from './Components/NoMatch/NoMatch';



const App = () => {
  return (
    <BRouter>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/SignIn2" element={<SignIn2 />} />
        <Route  path="/SignIn3" element={<SignIn3 />} />
        <Route  path="/SignIn4" element={<SignIn4 />} />
        <Route  path="/SignUp5" element={<SignUp5 />} />
        <Route  path="/SignUp6" element={<SignUp6 />} />
        <Route  path="/Welcome7" element={<Welcome7 />} />
        <Route  path="/CreateJob8" element={<CreateJob8 />} />
        <Route  path="/CreateJob9" element={<CreateJob9 />} />
        <Route  path="/CreateJob10" element={<CreateJob10 />} />
        <Route  path="/CreateJob11" element={<CreateJob11 />} />
        <Route  path="/VerifyPhone12" element={<VerifyPhone12 />} />
        <Route  path="/VerifyPhone13" element={<VerifyPhone13 />} />
        <Route  path="/Verified14" element={<Verifed14 />} />
        <Route  path="/Congrajulations15" element={<Congratulations15 />} />
        <Route  path="/HomePage16" element={<Homepage16 />} />
        <Route  path="/HomePage17" element={<Homepage17 />} />
        <Route  path="/HomePage18" element={<Homepage18 />} />
        <Route  path="/HomePage19" element={<Homepage19 />} />
        <Route  path="/Candidate20" element={<Candidate20 />} />
        <Route  path="/ScheduleInterview21" element={<ScheduleInterview21 />} />
        <Route  path='*' element={<NoMatch />} />

      </Routes>
    </BRouter>
  )
}

export default App
