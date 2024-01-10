import { useState } from "react";
import {
    Button
} from "@mui/material";
import "./SignUp5.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import FindJob from '../../Assets/FindJobIcon.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const SignUp = () => {


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()




    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Register', {name, email, password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
        navigate('/Candidate20')
    }

    return (
        <div className="sign-up5">
            <div className="left5">
                <img
                    className="backgroundim5-icon"
                    alt=""
                    src={BackgroundImg}
                />
                <b className="connect-merge-work5">Connect. Merge. Work</b>
            </div>
            <div className="right5">
                <div className="sign-up51">Sign Up</div>

                <img className="findjobicon5" alt="" src={FindJob} />
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Name : </strong>
                        </label>

                        <input
                            className="form-control rounded-0"
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                        />

                    </div>



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
                            sx={{ width: 400}}
                            color="primary"
                            variant="contained"
                        >
                            Create Your Account
                        </Button>
                   

                    </form>
                


                <div className="signincard5">
                    <div className="signinoption5">
                        <Link to='/SignIn3'>
                            <Button
                                className="signinbtn5"
                                sx={{ width: 360 }}
                                color="primary"
                                variant="text"
                            >
                                Log in
                            </Button>


                        </Link>
                    </div>
                    <div className="already-have-an">Already have an account?</div>
                </div>
                <div className="footer5">
                    <div className="findjobinc5">© 2020 Find Job, Inc.</div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;
