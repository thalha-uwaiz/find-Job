import {
    Switch,
    FormControlLabel,
    Button,
    TextField
} from "@mui/material";
import "./VerifyPhone12.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import ProfilePicture from '../../Assets/profilePic.png'
import CloseBtn from '../../Assets/closeBtn.svg'
import { Link } from "react-router-dom";

const VerifyPhone12 = () => {
    return (
        <div className="verify-phone12">
            <div className="right12">

                <div className="profilecard12">
                    <img
                        className="profilepic12-icon"
                        alt=""
                        src={ProfilePicture}
                    />
                    <div className="profilename12">Thalha</div>
                    <div className="picon12"></div>
                </div>


                <b className="post-a-job12">Post a job</b>


                <div className="optionscard12">
                    <Button
                        className="company-details12"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Company Details
                    </Button>
                    <Button
                        className="job-description12"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Job Description
                    </Button>
                    <Button
                        className="job-details12"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Job Details
                    </Button>
                    <Button
                        className="candidate-requiremen12"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Candidate Requirements
                    </Button>
                </div>


                <div className="optionincluded12">
                    <div className="email12">
                        <b className="email121">Email</b>
                        <FormControlLabel
                            className="btniconemail12"
                            control={<Switch color="primary" />}
                        />
                    </div>
                    <div className="vediocalling12">
                        <b className="email121">Video Calling</b>
                        <FormControlLabel
                            className="btniconemail12"
                            control={<Switch color="primary" />}
                        />
                    </div>
                    <div className="vediointerviews12">
                        <b className="email121">See Video Interviews</b>
                        <FormControlLabel
                            className="btniconemail12"
                            control={<Switch color="primary" />}
                        />
                    </div>
                    <b className="options-includedhed12">Options Included</b>
                </div>

                <div className="jobdiscriptioncard12">
                    <TextField
                        className="jobdesinbox"
                        color="primary"
                        size="large"
                        sx={{ width: 589 }}
                        variant="outlined"
                    />
                    <div className="describe-job-descrip12-container12">
                        <p className="describe-job-descriptions12">
                            Describe Job Descriptions in Details, Requirements
                        </p>
                        <p className="describe-job-descriptions12">Skills or Education*</p>
                    </div>
                    <b className="write-your-full12">Write Your Full Job Description</b>
                </div>




            </div>
            <div className="left12">
                <img className="background12-icon12" alt="" src={BackgroundImg} />
                <b className="connect-merge-work12">Connect. Merge. Work</b>
            </div>
            <div className="rectangle12" />
            <div className="verify12">
                <div className="rectangle1" />
                <TextField
                    className="phonenumber12"
                    color="primary"
                    label="Phone"
                    sx={{ width: 360 }}
                    variant="outlined"
                />

                <Link to='/VerifyPhone13'>
                <Button
                    className="verifyphonebtn"
                    sx={{ width: 360 }}
                    color="primary"
                    variant="contained"
                    type="tel"
                >
                    Verify Phone
                </Button>
                </Link>
                <button className="icons8-delete12">
                    <img className="path12-icon12" alt="" src={CloseBtn} />
                </button>
                <b className="before-you-continue-container12">
                    <p className="describe-job-descriptions12">{`Before you continue on our site, `}</p>
                    <p className="describe-job-descriptions12">
                        please verify your phone number:
                    </p>
                </b>
            </div>
        </div>
    );
};

export default VerifyPhone12;
