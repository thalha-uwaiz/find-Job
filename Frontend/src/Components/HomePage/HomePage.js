import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className="HomePage">
      <div className="main">
        <img className="backimg-iconH" alt="" src="/backimg@2x.png" />
        <div className="headerHome">
          <img className="logo-iconH" alt="" src="/logo.svg" />
          <div className="linksHome">
            <button className="how-we-work">How We Work</button>
            <button className="pricing">Pricing</button>
            <button className="download">Download</button>
            <button className="about-us">About Us</button>
          </div>
        </div>
        <div className="heading">
          <b className="connect-merge-work-container">
            <p className="connect">Connect.</p>
            <p className="connect">Merge. Work</p>
          </b>
          <button className="postjob" onClick={() => navigate('CreateJob8')}>
            <div className="post-job">Post Job</div>
          </button>
          <button className="gethired" onClick={() => navigate('SignIn2')}>
            <div className="get-hired">Get Hired</div>
          </button>
        </div>
      </div>
      <div className="bottom">
        <img className="link-icon" alt="" src="/001link.svg" />
        <img className="merge-2-icon" alt="" src="/005merge2.svg" />
        <img className="portfolio-icon" alt="" src="/006portfolio.svg" />
        <div className="connect1">
          <b className="connecttext">Connect</b>
          <div className="staffmerges-mission">
            Find Job mission is to CONNECT Employers with Job Seekers in an
            effective and efficient platform, making it easier for both.
          </div>
        </div>
        <div className="merge">
          <b className="mergetext">Merge</b>
          <div className="staffmerges-mission">
            Using Resumes, Video Introductions, Video Interviews, and Direct
            Messages, Find Job platform goal is to MERGE Employers and Job
            Seekers.
          </div>
        </div>
        <div className="work">
          <b className="worktex">Work</b>
          <div className="after-employers-and">
            After Employers and Job Seekers have connected and merged, now it is
            time to WORK, mutually benefiting both.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
