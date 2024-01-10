import "./Congrajulations15.scss";
import BackgroundImg from '../../Assets/BackgroundImg.png'
import ProfilePicture from '../../Assets/profilePic.png'
import CheckedIcon from '../../Assets/CheckedIcon.svg'


const Congratulations15 = () => {
  return (
    <div className="congratulations15">
      <div className="left15">
        <img className="background15-icon" alt="" src={BackgroundImg} />
        <b className="connect-merge-work15">Connect. Merge. Work</b>
      </div>
      <div className="right15">
        <img className="icontrue" alt="" src={CheckedIcon} />
        <b className="congratulations-you">
          Congratulations, your job has been posted.
        </b>
        <div className="giive-us-a">
          Giive us a few secodns to take you to homepage
        </div>
        <div className="profilecard15">
          <img
            className="profilepic15-icon"
            alt=""
            src={ProfilePicture}
          />
          <div className="profilename15">Thalha</div>
          <div className="picon15"></div>
        </div>
      </div>
    </div>
  );
};

export default Congratulations15;
