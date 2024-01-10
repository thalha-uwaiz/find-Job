
import "./SignIn3.scss";
import {
  Button
} from "@mui/material";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import FindJob from '../../Assets/FindJobIcon.png'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";





const SignIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()




  const handleSubmit = (e) => {

    e.preventDefault()
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result)
        if(result.data === "Success"){
          navigate('/Candidate20')
        }
      })
        .catch(err => console.log(err))
       

  }



  return (
    <div className="sign-in3">
      <div className="right-parent3">
        <div className="right3">
          <div className="loginText3">Log In</div>

          <div className="logincard3">
            <form onSubmit={handleSubmit}>


              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email : </strong>
                </label>

                <input
                  className="form-control rounded-0"
                  type="text"
                  placeholder="Enter Email"
                  name="Email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>



              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Password : </strong>
                </label>

                <input
                  className="form-control rounded-0"
                  type="password"
                  placeholder="Enter Password"
                  name="Password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}

                />

              </div>

              <Button type="submit"
                className="createyouraccbtn"
                sx={{ width: 400 }}
                color="primary"
                variant="contained"
              >
                Log In
              </Button>





            </form>


            <img className="find-job-icon3" alt="" src={FindJob} />
          </div>
        </div>
        <div className="signupcard3">
          <div className="donthaveanacc3">
            <Link to='/SignUp5'>
              <button className="Sign-Up-Btn3" >
                <div className="rectangle3" />
                <b className="sign-up3">Sign Up</b>
              </button>
            </Link>
            <div className="dont-have-an3">Don’t have an account?</div>
          </div>
          <div className="footer3">
            <div className="FindJobInc3">© 2020 Find Job, Inc.</div>
          </div>
        </div>
      </div>
      <div className="left3">
        <img className="image-icon3" alt="" src={BackgroundImg} />
        <b className="connect-merge-work3">Connect. Merge. Work</b>
      </div>
    </div>
  );
};

export default SignIn;
