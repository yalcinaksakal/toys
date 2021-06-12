import { useSelector } from "react-redux";
import { RootState } from "../../store";
import CustomButton from "../CustomButtton/CustomButton";
import { auth } from "../../utils/firebase.utils";
const Profile = () => {
  const { userPicture, email, displayName } = useSelector(
    (state: RootState) => state.login
  );

  return (
    <>
      <img
        src={userPicture}
        style={{ width: "120px", borderRadius: "50%", margin: "15px 0" }}
      />
      <h2>{displayName.toUpperCase()}</h2>
      <p style={{ marginBottom: "50px" }}>{email}</p>
      <CustomButton onClick={() => auth.signOut()}>Sign Out</CustomButton>
    </>
  );
};

export default Profile;
