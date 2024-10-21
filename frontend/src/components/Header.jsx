import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import background from "../image.jpg";

//Component created for Header Portion

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'  >
        <p style={{ marginLeft: "10%", fontSize: "25px", textAlign: "left", width: "100%", fontFamily: "Georgia, serif", fontWeight: "bold" }}>Conference Management System</p>
      </div>
      <ul>
        {user ? (
          <li style={{ display: 'flex', width: '250px', justifyContent: 'space-around', alignItems: 'center', fontFamily: "Georgia, serif" }}>
            <h1 style={{ fontSize: "20px", width: "160px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginLeft: "-40px" }}>{user && user.name}</h1>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>

          </>
        )}
      </ul>
    </header>
  )
}

export default Header