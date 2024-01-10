import { Button } from "@mui/material";
import "./SignUp6.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import FindJob from '../../Assets/FindJobIcon.png'

const SignUp = () => {
    return (
        <div className="sign-up">
            <div className="left6">
                <img
                    className="backgroundimage6-icon"
                    alt=""
                    src={BackgroundImg}
                />
                <b className="connect-merge-work6">Connect. Merge. Work</b>
            </div>
            <div className="right6">
                <div className="verifyemailcard6">
                    <div className="verify-email-title">Verify Email</div>
                    <div className="veryfyemail6">
                        <div className="we-have-sent-container">
                            <p className="we-have-sent">{`We have sent a verification email to `}</p>
                            <p className="mohamedthalha20gmailcom">
                                <b>mohamedthalha20@gmail.com</b>
                            </p>
                        </div>
                        <div className="please-verify-your">
                            Please verify your email to continue…
                        </div>
                    </div>
                    <img className="find-job6-icon" alt="" src={FindJob} />
                </div>
                <div className="bottom6">
                    <div className="resendverficationmail">
                        <Button
                            className="resendverficationmailbtn"
                            sx={{ width: 320 }}
                            color="primary"
                            variant="outlined"
                        >
                            Resend Verification Email
                        </Button>
                        <div className="didnt-get-the">
                            Didnt Get the Verification Email?
                        </div>
                    </div>
                    <div className="footer6">
                        <div className="findjobinc6">© 2020 Find Job, Inc.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
