import { auth } from "../lib/firebase";
import Login from "./Login"

function Header({ user }) {
    
  const logout = () => {
    auth.signOut();
  };
  
  return (
    <div> 
    { user ? ( 
      <div className="navbar-end" style={{display: "flex"}}>
        <div className="navbar-item">
          {user.name}
        </div>
        <div className="navbar-item">
          <button className="button is-danger is-light is-small" onClick={logout}> Logout </button>
        </div>
      </div >
    ) : (<Login />)
    }
    </div>
  )
}

export default Header