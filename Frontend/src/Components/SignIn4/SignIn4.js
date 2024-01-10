import "./SignIn4.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import FindJob from '../../Assets/FindJobIcon.png'

const SignIn = () => {
  return (
    <div className="sign-in4">
      <div className="right4">
        <div className="passwordcard4">
          <button className="resetpwbtn4">
            <b className="reset-password4">Reset Password</b>
          </button>
          <div className="inputpw4">
            <div className="rectangle4" />
            <input
              className="enter-your-email4"
              placeholder="Enter your email to reset password"
              type="text"
            />
            <div className="we-will-send4">
              We will send an email to reset your password.
            </div>
            <div className="forget-password4">Forget password?</div>
          </div>
          <img className="find-job-icon4" alt="" src={FindJob} />
        </div>
        <div className="footer4">
          <div className="passwordlink4">
            <button className="resendBtn4">
              <div className="rectangle4-1" />
              <b className="resend-again4">Resend Again</b>
            </button>
            <div className="didnt-received-the4">
              Didnt Received the reset password link?
            </div>
          </div>
          <div className="findjobinc4">
            <div className="FindJob-i4">© 2020 Find Job, Inc.</div>
          </div>
        </div>
      </div>
      <div className="left4">
        <img
          className="backgroundimg-icon4"
          alt=""
          src={BackgroundImg}
        />
        <b className="connect-merge-work4">Connect. Merge. Work</b>
      </div>
    </div>
  );
};

export default SignIn;
