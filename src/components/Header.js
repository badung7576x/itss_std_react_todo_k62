import { auth } from "../lib/firebase";
import Login from "./Login"
import UploadAvatar from "./UploadAvatar"

import FirebaseService from "../services/firebaseService";

function Header({ user }) {
    
  const logout = () => {
    auth.signOut();
  };
  
  const handleImageChanged = async (imageUrl) => {
    await FirebaseService.updateAvatar(user, imageUrl);
  }
  
  return (
    <div> 
    { user ? ( 
      <div class="navbar-end" style={{display: "flex"}}>
        <div class="navbar-item">
          <UploadAvatar userImage={user.image} onImageSelected={handleImageChanged} />
          {user.name}
        </div>
        <div class="navbar-item">
          <button class="button is-danger is-light is-small" onClick={logout}> Logout </button>
        </div>
      </div >
    ) : (<Login />)
    }
    </div>
  )
}

export default Header