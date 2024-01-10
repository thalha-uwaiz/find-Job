import {
    TextField,
    Button,
} from "@mui/material";
import "./CreateJob8.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import ProfilePicture from '../../Assets/profilePic.png'
import { Link } from "react-router-dom";

const CreateJob = () => {
    return (
        <div className="create-job8">
            <div className="left8">
                <img
                    className="backgroundimg8-icon"
                    alt=""
                    src={BackgroundImg}
                />
                <b className="connect-merge-work">Connect. Merge. Work</b>
            </div>
            <div className="right8">
                <b className="post-a-job8">Post a job</b>
                <div className="profilecard8">
                    <img className="profilepic-icon" alt="" src={ProfilePicture} />
                    <div className="profilename8">Thalha</div>
                    <div className="picon8"></div>

                </div>
                <div className="companylocationcard">
                    <TextField
                        className="company-street-address"
                        color="primary"
                        label="Company Street Address"
                        sx={{ width: 330 }}
                        variant="outlined"
                    />
                    <TextField
                        className="country8"
                        color="primary"
                        label="Country"
                        sx={{ width: 180 }}
                        variant="outlined"
                    />
                    <TextField
                        className="state8"
                        color="primary"
                        label="State"
                        sx={{ width: 180 }}
                        variant="outlined"
                    />
                    <TextField
                        className="city8"
                        color="primary"
                        label="City"
                        sx={{ width: 180 }}
                        variant="outlined"
                    />
                    <b className="company-location">Company Location</b>
                </div>
                <Link to='/CreateJob9'
                    className="nextbtn8"
                    sx={{ width: 350 }}
                    color="primary"
                    variant="contained"
                >
                    NEXT
                </Link>
                <div className="companydetailscard8">
                    <TextField
                        className="companyname8"
                        color="primary"
                        label="Your Company Name"
                        sx={{ width: 350 }}
                        variant="outlined"
                    />
                    <TextField
                        className="yourname8"
                        color="primary"
                        label="Your Name"
                        sx={{ width: 350 }}
                        variant="outlined"
                    />
                    <TextField
                        className="companysixe8"
                        color="primary"
                        label="Company Size(Number Of members) "
                        sx={{ width: 350 }}
                        variant="outlined"
                        type="number"
                    />
                    <TextField
                        className="phonenumber8"
                        color="primary"
                        label="Phone"
                        sx={{ width: 350 }}
                        variant="outlined"
                        type="tel"
                    />
                </div>
                <div className="pagescard8">

                    <Button className="company-details8" color="primary" variant="text" sx={{ width: 75 }}>
                        Company Details
                    </Button>

                    <Button className="job-details8" color="primary" variant="text" sx={{ width: 75 }}>
                        Job Details
                    </Button>

                    <Button className="candidate-requiremen8" color="primary" variant="text" sx={{ width: 75 }}>
                        Candidate Requirement
                    </Button>

                    <Button className="job-description8" color="primary" variant="text" sx={{ width: 75 }}>
                        Job Description
                    </Button>

                </div>

            </div>
        </div>
    );
};

export default CreateJob;
