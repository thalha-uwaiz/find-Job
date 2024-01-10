import "./SignIn2.scss";
import Google from '../../Assets/GoogleIcon.png'
import Facebook from '../../Assets/FaceBookIcon.png'
import BackgroundImg from '../../Assets/BackgroundImg.png'
import {Link} from "react-router-dom"



const SignIn = () => {
  


  return (
    <div className="sign-in2">
      <div className="sign-in-inner2">
        <div className="frame-parent2">
          <div className="find-job-parent2">

            <Link to="/SignIn3"
              className="log-in-with-email-wrapper2"
              
            >
              <div className="log-in-with">Log in with Email</div>
            </Link>

            <Link to="/SignIn3">
            <button className="frame-wrapper2">
              <div className="log-in-with-parent2">
                <div className="log-in-with12">Log in with</div>
                <img className="bitmap-icon2" alt="" src={Google} />
              </div>
            </button>
            </Link>
            <button className="frame-group2">
              <div className="frame-container2">
                <div className="log-in-with-wrapper2">
                  <div className="log-in-with2">Log in with</div>
                </div>
              </div>
              <img className="bitmap-icon2F" alt="" src={Facebook} />
            </button>
          </div>
          <div className="frame2">
            <div className="group-div2">
              <Link to="/SignIn3" className="rectangle-parent2" >
                <div className="rectangle2" />
                <b className="signup2">Log In</b>
              </Link>
              <div className="dont-have-an">Don’t have an account?</div>
            </div>
            <div className="FindJobInc2">
              <div className="footer2">© 2020 Find Job, Inc.</div>
            </div>
          </div>
        </div>

      </div>
      <div className="left2">
        <img
          className="removebg-preview-icon2"
          alt=""
          src={BackgroundImg}
        />
        <h1 className="connect-merge-work2">Connect. Merge. Work</h1>
      </div>

    </div>
  );
};

export default SignIn;
