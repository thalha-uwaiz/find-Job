import {
    Switch,
    FormControlLabel,
    TextField,
    Button,
} from "@mui/material";
import "./CreateJob11.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import ProfilePicture from '../../Assets/profilePic.png'
import { Link } from "react-router-dom";

const CreateJob = () => {
    return (
        <div className="create-job11">
            <div className="left11">
                <img className="background11-icon" alt="" src={BackgroundImg} />
                <b className="connect-merge-work11">Connect. Merge. Work</b>
            </div>
            <div className="right11">
                <div className="profilecard911">
                    <img
                        className="profilepic11-icon"
                        alt=""
                        src={ProfilePicture}
                    />
                    <div className="profilename11">Thalha</div>
                    <div className="picon11"></div>
                </div>
                <b className="post-a-job11">Post a job</b>
                <div className="optionscard11">
                    <Button
                        className="company-details"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Company Details
                    </Button>
                    <Button
                        className="job-description"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Job Description
                    </Button>
                    <Button
                        className="job-details"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Job Details
                    </Button>
                    <Button
                        className="candidate-requiremen"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Candidate Requirements
                    </Button>
                </div>

                <div className="jobdiscriptioncard">
                    <TextField
                        className="jobdesinbox"
                        color="primary"
                        label="Job Description"
                        size="large"
                        sx={{ width: 589 }}
                        variant="outlined"
                    />
                    <div className="describe-job-descrip-container11">
                        <p className="describe-job-descriptions11">
                            Describe Job Descriptions in Details, Requirements
                        </p>
                        <p className="describe-job-descriptions11">Skills or Education*</p>
                    </div>
                    <b className="write-your-full11">Write Your Full Job Description</b>
                </div>


                <div className="optionincluded11">
                    <div className="email11">
                        <b className="email">Email</b>
                        <FormControlLabel
                            className="btniconemail"
                            control={<Switch color="primary" />}
                        />
                    </div>
                    <div className="vediocalling11">
                        <b className="email">Video Calling</b>
                        <FormControlLabel
                            className="btniconemail"
                            control={<Switch color="primary" />}
                        />
                    </div>
                    <div className="vediointerviews">
                        <b className="email">See Video Interviews</b>
                        <FormControlLabel
                            className="btniconemail"
                            control={<Switch color="primary" />}
                        />
                    </div>
                    <b className="options-includedhed">Options Included</b>
                </div>
                
                <Link to='/VerifyPhone12'>
                <Button
                    className="postJobBtn11"
                    sx={{ width: 360 }}
                    color="primary"
                    variant="contained"
                >
                    Post Job
                </Button>
                </Link>
                

            </div>
        </div>
    );
};

export default CreateJob;
