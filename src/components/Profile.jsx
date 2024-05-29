import {user} from "../utils/FirebaseConfig"

const Profile = () => {
  const {email,displayName} = user
  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {displayName}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default Profile;
