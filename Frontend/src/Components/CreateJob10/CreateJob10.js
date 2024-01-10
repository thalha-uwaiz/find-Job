import {
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import "./CreateJob10.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import ProfilePicture from '../../Assets/profilePic.png'
import { Link } from "react-router-dom";

const CreateJob = () => {
    return (
        <div className="create-job10">
            <div className="left10">
                <img
                    className="backgroundimg10-icon"
                    alt=""
                    src={BackgroundImg}
                />
                <b className="connect-merge-work10">Connect. Merge. Work</b>
            </div>
            <div className="right">
                <b className="post-a-job10">Post a job</b>
                <Link to='/CreateJob11'>
                <Button
                    className="nextbtn10"
                    sx={{ width: 360 }}
                    color="primary"
                    variant="contained"
                >
                    Next
                </Button>
                </Link>

                <div className="additionaljobdetailscard">
                    <div className="what-availability-is">
                        What Availability is Needed For This Job?
                    </div>
                    <b className="additional-job-detai">Additional Job Details</b>

                    <FormControlLabel
                        className="hours1"
                        label="10 Hour Shift"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="hours2"
                        label="8 Hour Shift"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="overtime"
                        label="Overtime"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="nightshift"
                        label="Night Shift"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="dayshift"
                        label="Day Shift"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="holiday-req"
                        label="Holidays Required"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="weekends-req"
                        label="Weekends Required"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="noweekends"
                        label="No Weekends"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="mondaytofriday"
                        label="Monday to Friday"
                        control={<Checkbox color="primary" size="small" />}
                    />

                </div>
                <div className="candidatereqcard">
                    <b className="candidate-requiremen101">Candidate Requirements</b>
                    <TextField
                        className="hireperiod"
                        color="primary"
                        label="How Urgently Do You Need to Make a Hire?(days)"
                        sx={{ width: 350 }}
                        variant="outlined"
                        type="number"
                    />
                    <TextField
                        className="numberofhire"
                        color="primary"
                        label="How Many Hires Do You Require For this Job?"
                        sx={{ width: 350 }}
                        variant="outlined"
                        type="number"
                    />

                </div>
                <div className="optionscard10">
                    <Button
                        className="company-details10"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Company Details
                    </Button>
                    <Button
                        className="job-details10"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Job Details
                    </Button>
                    <Button
                        className="job-description10"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Job Description
                    </Button>
                    <Button
                        className="candidate-requiremen10"
                        sx={{ width: 75, height: 50 }}
                        color="primary"
                        variant="text"
                    >
                        Candidate Requirements
                    </Button>
                </div>
                <TextField
                    className="websitename"
                    color="primary"
                    label="Please Enter Your Company's Website"
                    sx={{ width: 350 }}
                    variant="outlined"
                />
                <TextField
                    className="fullyremote10"
                    color="primary"
                    label="Does This Job Allow Hires Fully Remote?"
                    sx={{ width: 350 }}
                    variant="outlined"
                />

                <div className="profilecard910">
                    <img
                        className="profilepic10-icon"
                        alt=""
                        src={ProfilePicture}
                    />
                    <div className="profilename10">Thalha</div>
                    <div className="picon10"></div>
                </div>
            </div>
        </div>
    );
};

export default CreateJob;
