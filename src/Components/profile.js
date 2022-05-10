import { ProfilePhoto } from "../import";
import "./profile.css";

function Profile() {
  return (
    <>
      <div className="img">
        <img src={ProfilePhoto} alt="profile" />
      </div>
    </>
  );
}

export default Profile;
