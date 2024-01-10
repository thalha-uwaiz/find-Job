import {
    Button,
    TextField,
} from "@mui/material";
import "./ScheduleInterview21.scss";
import FindJob from '../../Assets/FindJobIcon.png'
import ProfilePicture from '../../Assets/profilePic.png'
import { Link } from "react-router-dom";


const ScheduleInterview = () => {
    return (
        <div className="schedule-interview21">
            <img className="findmergeicon21" alt="" src={FindJob} />
            <div className="profilecard21">
                <img className="profilepic21-icon" alt="" src={ProfilePicture} />
                <div className="profilename21">Thalha</div>
                <div className="picon21"></div>
            </div>
            <Button
                className="postjobbtn21"
                sx={{ width: 120 }}
                color="primary"
                size="small"
                variant="contained"
            >
                Post Job
            </Button>

            <TextField
                className="date21"
                color="primary"
                sx={{ width: 600 }}
                variant="outlined"
                type="date"
            />

            <TextField
                className="time21card"
                color="primary"
                label="Time"
                sx={{ width: 600 }}
                variant="outlined"
                type="time"
            />

            <TextField
                className="addittionalnoterec"
                color="primary"
                label="Additional Note…"
                size="large"
                sx={{ width: 600 }}
                variant="outlined"
            />


            <b className="date">Date</b>
            <b className="schedule-interview1">Schedule Interview</b>
            <div className="header21">
                <Button
                    className="active-jobs21"
                    sx={{ width: 100 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Active Jobs
                </Button>
                <Button
                    className="archived21"
                    sx={{ width: 100 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Archived
                </Button>
                <Button
                    className="saved-candidates21"
                    sx={{ width: 150 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Saved Candidates
                </Button>
                <Button
                    className="interviews21"
                    sx={{ width: 100 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Interviews
                </Button>
                <Button
                    className="message21"
                    sx={{ width: 100 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Message
                </Button>
                <Button
                    className="advanced-search21"
                    sx={{ width: 150 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Advanced Search
                </Button>
            </div>

            <div className="ButtonCard21">
            <Button
                className="confirminterviewbtn21"
                sx={{ width: 250 }}
                color="primary"
                variant="contained"
            >
                Confirm Interview
            </Button>

            <Link to='/Candidate20'>
            <Button
                className="cancelbtn21"
                sx={{ width: 250 }}
                color="primary"
                variant="outlined"
            >
                Cancel
            </Button>
            </Link>

            </div>
        </div>
    );
};

export default ScheduleInterview;
