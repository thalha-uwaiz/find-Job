import { Button } from "@mui/material";
import "./Candidate20.scss";
import FindJob from '../../Assets/FindJobIcon.png'
import ProfilePicture from '../../Assets/profilePic.png'
import CandidateProfile from '../../Assets/CandidateProfile.png'
import VedioIcon from '../../Assets/vedioicon20.svg'
import CandidateVedio from '../../Assets/CandidateVedio.png'
import { Link } from "react-router-dom";


const Candidate = () => {
  return (
    <div className="candidate">
      <Button
        className="postjobbtn20"
        sx={{ width: 120 }}
        color="primary"
        size="small"
        variant="contained"
      >
        Post Job
      </Button>
      <div className="header20">
        <Button
          className="active-jobs20"
          sx={{ width: 100 }}
          color="primary"
          size="small"
          variant="text"
        >
          Active Jobs
        </Button>
        <Button
          className="archived20"
          sx={{ width: 100 }}
          color="primary"
          size="small"
          variant="text"
        >
          Archived
        </Button>

        <Link to='/HomePage16'>
        <Button
          className="saved-candidates20"
          sx={{ width: 150 }}
          color="primary"
          size="small"
          variant="text"
        >
          Saved Candidates
        </Button>
        </Link>

        <Link to='/ScheduleInterview21'>
        <Button
          className="interviews20"
          sx={{ width: 100 }}
          color="primary"
          size="small"
          variant="text"
        >
          Interviews
        </Button>
        </Link>
        <Button
          className="message20"
          sx={{ width: 100 }}
          color="primary"
          size="small"
          variant="text"
        >
          Message
        </Button>
        <Button
          className="advanced-search20"
          sx={{ width: 150 }}
          color="primary"
          size="small"
          variant="text"
        >
          Advanced Search
        </Button>
      </div>
      <div className="candidatedetailscard20">
        <div className="rectangle" />
        <div className="had-5-years-container">
          <span>{`Had 5 years of working experience as design lead. Working for a reputated com.. `}</span>
          <span className="see-more">See More</span>
        </div>
        <div className="candidatename20">
          <b className="thalhauwaiz">ThalhaUwaiz</b>
        </div>
        <img
          className="candidatepro20-icon"
          alt=""
          src={CandidateProfile}
        />
        <div className="applicationnote20">
          <div className="just-saw-your-container">
            <p className="just-saw-your">{`Just saw your job application. I think i am perfect fit for `}</p>
            <p className="just-saw-your">
              all your requirements and can start from your desired time. Lets
              talk in details in a interview.
            </p>
          </div>
          <b className="applicant-note">Applicant Note:</b>


        </div>
        <div className="locatoncard20">
          <div className="country20">
            <div className="kattankudyt">Country</div>
            <b className="srilanka20">Srilanka</b>
          </div>
          <div className="city20">
            <div className="kattankudyt">City</div>
            <b className="kattankudy20">Kattankudy</b>
          </div>
          <div className="state20">
            <div className="kattankudyt">State</div>
            <b className="batticaloa20">Batticaloa</b>
          </div>
        </div>
        <div className="applicationvediocard">
          <b className="applicant-video">Applicant Video:</b>
          <div className="video">
            <div className="applicantimg20">
              <div className="applicationimg">
                <img className="appimg-icon" alt="" src={CandidateVedio} />
                <div className="mask" />
              </div>
            </div>
            <img className="vedioicon20" alt="" src={VedioIcon} />
          </div>
        </div>

        <div className="skillscard20">
          <div className="adobesuite20">
            <div className="adobesuite20t" />
            <div className="adobe-suite">Adobe Suite</div>
          </div>
          <div className="indesign20">
            <div className="indesign20t" />
            <div className="indesign">Indesign</div>
          </div>
          <div className="sketsch20">
            <div className="indesign20t1" />
            <div className="sketch">Sketch</div>
          </div>
          <b className="skills">Skills</b>
        </div>

        <Link to='/ScheduleInterview21'>
        <Button
          className="scheduleinterviewbtn20"
          sx={{ width: 220 }}
          color="primary"
          size="small"
          variant="contained"
        >
          Schedule Interview
        </Button>
        </Link>
        <Button
          className="see-resumebtn20"
          sx={{ width: 220 }}
          color="primary"
          size="small"
          variant="outlined"
        >
          See Resume
        </Button>
      </div>


      <div className="profilecard20">
        <img className="profilepic20-icon" alt="" src={ProfilePicture} />
        <div className="profilename20">Thalha</div>
        <div className="picon20"></div>
      </div>
      <img className="findmergeicon20" alt="" src={FindJob} />
    </div>
  );
};

export default Candidate;
