
import "./Welcome7.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import ProfilePicture from '../../Assets/profilePic.png'
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="left7">
        <img className="leftback7-icon" alt="" src={BackgroundImg} />
        <b className="connect-merge-work7">Connect. Merge. Work</b>
      </div>
      <div className="right7">
        <div className="to-continue-you">To continue you have to:</div>
        <b className="welcome1">Welcome!</b>
        <Link to='/HomePage16'
          className="gotohomebtn7"
          sx={{ width: 320 }}
          color="primary"
          variant="outlined"
        >
          Go To Homepage
        </Link>
        <Link to='/CreateJob8'
          className="postjobbtn7"
          sx={{ width: 320 }}
          color="primary"
          variant="contained"
        >
          Post a Job
        </Link>
        <div className="footer7">
          <div className="findjob7">© 2020 Find Job, Inc.</div>
        </div>
        <div className="profilecard7">
          <img className="profilepic7-icon" alt="" src={ProfilePicture} />
          <div className="profilename7">Thalha</div>
          <div className="picon7"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
