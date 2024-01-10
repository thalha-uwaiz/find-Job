import { Button } from "@mui/material";
import "./HomePage17.scss";
import FindJob from '../../Assets/FindJobIcon.png'
import ProfilePicture from '../../Assets/profilePic.png'
import BellIcon from '../../Assets/bellicon.svg'
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage17">
      <div className="profilecard17">
        <img className="profilepic17-icon" alt="" src={ProfilePicture} />
        <div className="profilename17">Thalha</div>
        <div className="picon17"></div>
      </div>
      <Button
        className="postjobbtn17"
        sx={{ width: 120 }}
        color="primary"
        variant="contained"
      >
        Post Job
      </Button>
      <div className="header">
        <Button
          className="active-jobs"
          sx={{ width: 100}}
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
      <div className="seniorreactdeveloper17">
        <b className="senior-reactdeveloper17">Senior React Developer needed</b>
        <div className="reqforreact17">
          <p className="our-company-bluechiptechasia17">
            Our company BlueChipTechAsia is looking for a senior React Developer
            to take over March, 2020.
          </p>
          <p className="our-company-bluechiptechasia17">&nbsp;</p>
          <p className="our-company-bluechiptechasia17">
            <b>Requirements:</b>
          </p>
          <p className="our-company-bluechiptechasia17">- 3 years Experience</p>
          <p className="our-company-bluechiptechasia17">- Team Leader</p>
          <p className="our-company-bluechiptechasia17">
            - Innovative and Creative eye
          </p>
        </div>
        <div className="footerreact17">
          <b className="ny17">NY</b>
          <b className="location-17">Location -</b>
          <div className="type-inhouse-217">
            <b className="type-in-house17">Type - In-house</b>
          </div>
          <div className="salaryrangereact17">
            <b className="salary17">Salary</b>
            <b className="k17">- 50-60k</b>
          </div>
        </div>
        <div className="skilsforreact17">
          <div className="reactjs17">
            <div className="reactjsrec17" />
            <div className="reactjs117">ReactJs</div>
          </div>
          <div className="database17">
            <div className="reactjsrec17" />
            <div className="database117">DataBase</div>
          </div>
          <div className="uiux17">
            <div className="reactjsrec17" />
            <div className="uiux117">UI/UX</div>
          </div>
          <div className="nodejs17">
            <div className="reactjsrec17" />
            <div className="nodejs117">Nodejs</div>
          </div>
        </div>
        <img className="line-icon17" alt="" src="/line.svg" />
        <b className="skills-17">Skills -</b>
      </div>
      <div className="senior-ui-designer17">
        <div className="requirments17">
          <p className="our-company-bluechiptechasia17">
            Our company Microsoft is looking for a senior UI and UX lead
            designer to take over March, 2020.
          </p>
          <p className="our-company-bluechiptechasia17">&nbsp;</p>
          <p className="our-company-bluechiptechasia">
            <b>Requirements:</b>
          </p>
          <p className="our-company-bluechiptechasia17">- 5 years Experience</p>
          <p className="our-company-bluechiptechasia17">- Team Leader</p>
          <p className="our-company-bluechiptechasia17">
            - Innovative and Creative eye
          </p>
        </div>
        <div className="footerjob17">
          <b className="location-117">Location -</b>
          <div className="type-inhouse-217">
            <b className="type-in-house17">Type - In-house</b>
          </div>
          <b className="ny17">NY</b>
          <div className="salaryrangereact17">
            <b className="salary17">Salary</b>
            <b className="k17">- 50-60k</b>
          </div>
        </div>
        <div className="skills17">
          <div className="reactjs17">
            <div className="reactjsrec17" />
            <div className="adobe-xd17">Adobe XD</div>
          </div>
          <div className="database17">
            <div className="reactjsrec17" />
            <div className="sketch-pro17">Sketch Pro</div>
          </div>
          <div className="uiux17">
            <div className="reactjsrec17" />
            <div className="adobe-xd17">Adobe XD</div>
          </div>
          <div className="nodejs17">
            <div className="reactjsrec17" />
            <div className="sketch-pro17">Sketch Pro</div>
          </div>
          <b className="skills-117">Skills -</b>
        </div>
        <b className="jobhed17">Senior UI Designer needed</b>
        
      </div>
      <img className="bellicon17" alt="" src={BellIcon} />
      <img className="find-job17-icon" alt="" src={FindJob} />
      <div className="rectangle17" />
      <div className="deletepostcard17">
        <div className="rectangle117" />
        <Button
          className="nobtn17"
          sx={{ width: 130 }}
          color="primary"
          variant="outlined"
        >
          No
        </Button>

        <Link to='/HomePage19'>
        <Button
          className="yesbtn17"
          sx={{ width: 130 }}
          color="primary"
          variant="contained"
        >
          Yes
        </Button>

        </Link>
        <b className="do-you-want17">Do you want to Post this job post?</b>
      </div>
    </div>
  );
};

export default Homepage;
