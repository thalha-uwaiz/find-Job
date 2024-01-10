import { Button } from "@mui/material";
import "./HomePage16.scss";
import FindJob from '../../Assets/FindJobIcon.png'
import ProfilePicture from '../../Assets/profilePic.png'
import BellIcon from '../../Assets/bellicon.svg'
import { Link } from "react-router-dom";

const Homepage16 = () => {
    return (
        <div className="homepage16">
            <img className="find-job16-icon" alt="" src={FindJob} />

            <div className="profilecard16">
                <img className="profilepic16-icon" alt="" src={ProfilePicture} />
                <div className="profilename16">Thalha</div>
                <img className="bellicon" alt="" src={BellIcon} />
            </div>

            <Link to='/HomePage17'>
            <Button
                className="postjobbtn16"
                sx={{ width: 120 }}
                color="primary"
                variant="contained"
            >
                Post Job
            </Button>
            </Link>
            
            <div className="senior-ui-designer">
                <div className="requirments16">
                    <p className="our-company-microsoft">
                        Our company Microsoft is looking for a senior UI and UX lead
                        designer to take over March, 2020.
                    </p>
                    <p className="our-company-microsoft">&nbsp;</p>
                    <p className="our-company-microsoft">
                        <b>Requirements:</b>
                    </p>
                    <p className="our-company-microsoft">- 5 years Experience</p>
                    <p className="our-company-microsoft">- Team Leader</p>
                    <p className="our-company-microsoft">- Innovative and Creative eye</p>
                </div>
                <div className="footerjob16">
                    <b className="location-">Location -</b>
                    <div className="type-inhouse-2">
                        <b className="type-in-house">Type - In-house</b>
                    </div>
                    <b className="ny">NY</b>
                    <div className="salaryrangereact">
                        <b className="salary">Salary</b>
                        <b className="k">- 50-60k</b>
                    </div>
                </div>
                <div className="skills16">
                    <div className="adobexd">
                        <div className="adobexdrec" />
                        <div className="adobe-xd">Adobe XD</div>
                    </div>
                    <div className="sketchpro">
                        <div className="adobexdrec" />
                        <div className="sketch-pro">Sketch Pro</div>
                    </div>
                    <div className="uiux">
                        <div className="adobexdrec" />
                        <div className="adobe-xd">Adobe XD</div>
                    </div>
                    <div className="nodejs">
                        <div className="adobexdrec" />
                        <div className="sketch-pro">Sketch Pro</div>
                    </div>
                    <b className="skills-">Skills -</b>
                </div>
                <b className="jobhed">Senior UI Designer needed</b>
                <img className="line-icon" alt="" src="/line.svg" />
            </div>

            <div className="seniorreactdeveloper">
                <b className="senior-reactdeveloper">Senior React Developer needed</b>
                <div className="reqforreact">
                    <p className="our-company-microsoft">
                        Our company BlueChipTechAsia is looking for a senior React Developer
                        to take over March, 2020.
                    </p>
                    <p className="our-company-microsoft">&nbsp;</p>
                    <p className="our-company-microsoft">
                        <b>Requirements:</b>
                    </p>
                    <p className="our-company-microsoft">- 3 years Experience</p>
                    <p className="our-company-microsoft">- Team Leader</p>
                    <p className="our-company-microsoft">- Innovative and Creative eye</p>
                </div>
                <div className="footerreact">
                    <b className="ny">NY</b>
                    <b className="location-1">Location -</b>
                    <div className="type-inhouse-2">
                        <b className="type-in-house">Type - In-house</b>
                    </div>
                    <div className="salaryrangereact">
                        <b className="salary">Salary</b>
                        <b className="k">- 50-60k</b>
                    </div>
                </div>
                <div className="skilsforreact">
                    <div className="adobexd">
                        <div className="adobexdrec" />
                        <div className="reactjs1">ReactJs</div>
                    </div>
                    <div className="sketchpro">
                        <div className="adobexdrec" />
                        <div className="database1">DataBase</div>
                    </div>
                    <div className="uiux">
                        <div className="adobexdrec" />
                        <div className="uiux1">UI/UX</div>
                    </div>
                    <div className="nodejs">
                        <div className="adobexdrec" />
                        <div className="nodejs1">Nodejs</div>
                    </div>
                </div>
                <b className="skills-1">Skills -</b>
            </div>


            <div className="header16">
                <Button
                    className="active-jobs"
                    sx={{ width: 100 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Active Jobs
                </Button>
                <Button
                    className="archived"
                    sx={{ width: 100 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Archived
                </Button>
                <Button
                    className="saved-candidates"
                    sx={{ width: 150 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Saved Candidates
                </Button>
                <Button
                    className="interviews"
                    sx={{ width: 100 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Interviews
                </Button>
                <Button
                    className="message"
                    sx={{ width: 100 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Message
                </Button>
                <Button
                    className="advanced-search"
                    sx={{ width: 150 }}
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Advanced Search
                </Button>
            </div>

        </div>
    );
};

export default Homepage16;
