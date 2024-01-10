import {
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import "./CreateJob9.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import ProfilePicture from '../../Assets/profilePic.png'
import { Link } from "react-router-dom";

const CreateJob9 = () => {
    return (
        <div className="create-job9">
            <div className="left9">
                <img
                    className="backgroundimg9-icon"
                    alt=""
                    src={BackgroundImg}
                />
                <b className="connect-merge-work9">Connect. Merge. Work</b>
            </div>
            <div className="right9">
                <div className="profilecard9">
                    <img className="profilepic-icon9" alt="" src={ProfilePicture} />
                    <div className="profilename9">Thalha</div>
                    <div className="picon9"></div>
                </div>
                <b className="post-a-job9">Post a job</b>
                <div className="optionbarcard9">
                    <div className="options">
                        <Button
                            className="company-details9"
                            sx={{ width: 75, height: 10 }}
                            color="primary"
                            variant="text"
                        >
                            Company Details
                        </Button>
                        <Button
                            className="job-details9"
                            sx={{ width: 75, height: 10 }}
                            color="primary"
                            variant="text"
                        >
                            Job Details
                        </Button>
                        <Button
                            className="candidate-requiremen9"
                            sx={{ width: 75, height: 10 }}
                            color="primary"
                            variant="text"
                        >
                            Candidate Requirements
                        </Button>
                        <Button
                            className="job-description9"
                            sx={{ width: 75, height: 10 }}
                            color="primary"
                            variant="text"
                        >
                            Job Description
                        </Button>
                    </div>

                </div>
                <TextField
                    className="jobtitle"
                    color="primary"
                    label="Job Title"
                    size="small"
                    sx={{ width: 360 }}
                    variant="outlined"
                />



                <div className="salaryandcontract">
                    <div className="what-is-the">What is the Pay for this Job?</div>
                    <TextField
                        className="contracttype"
                        color="primary"
                        label="Contract Type(Per Hour/Day/Month/Year)"
                        size="small"
                        sx={{ width: 370 }}
                        variant="outlined"
                    />
                    <TextField
                        className="to"
                        color="primary"
                        label="To $"
                        size="small"
                        sx={{ width: 175 }}
                        variant="outlined"
                        type="number"
                    />
                    <TextField
                        className="from"
                        color="primary"
                        label="From $"
                        size="small"
                        sx={{ width: 175 }}
                        variant="outlined"
                        type="number"

                    />


                </div>
                <div className="jobtype">
                    <FormControlLabel
                        className="fulltime"
                        label="Full-Time"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="parttime"
                        label="Part-Time"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <div className="what-type-of">What Type of Job is it?</div>
                </div>
                <div className="benefits-offerd">
                    <FormControlLabel
                        className="dentalinsurance"
                        label="Dental Insurance"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="visioninsurance"
                        label="Vision Insurance"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="retirement-plan"
                        label="Retirement Plan"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="workfromhome"
                        label="Work From Home"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="flexibleschedule"
                        label="Flexible Schedule"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="parental-leave"
                        label="Parental Leave"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="relocationassistance"
                        label="Relocation Assistance"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="healthinsurance"
                        label="HealthInsurance"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <div className="are-any-of">
                        Are Any of the Following Benefits Offered?
                    </div>
                </div>
                <div className="compensationofferd">
                    <FormControlLabel
                        className="tips"
                        label="Tips"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="commission"
                        label="Commission"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="bonuses"
                        label="Bonuses"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="storediscounts"
                        label="Store Discounts"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <FormControlLabel
                        className="otherforms"
                        label="Other Forms"
                        labelPlacement="end"
                        control={<Checkbox color="primary" size="small" />}
                    />
                    <div className="are-there-any-container">
                        <p className="are-there-any">{`Are there Any Additional Form of Compensation `}</p>
                        <p className="are-there-any">Offered?</p>
                    </div>
                </div>
                <TextField
                    className="expericereq"
                    color="primary"
                    label="Experience Required?"
                    size="small"
                    sx={{ width: 360 }}
                    variant="outlined"
                    type="number"
                />


                <Link to='/CreateJob10'>
                <Button
                    className="nextbtn9"
                    sx={{ width: 360 }}
                    color="primary"
                    size="small"
                    variant="contained"
                >
                    Next
                </Button>
                </Link>

            </div>
        </div>
    );
};

export default CreateJob9;
