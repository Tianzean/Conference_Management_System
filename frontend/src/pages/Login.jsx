import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import background from "../image.jpg";
import { IoMdLogIn } from 'react-icons/io';
import { Link } from 'react-router-dom'

//Code for Login Component. The Login component is using React hooks to manage component state and side effects. 

//useState hook to manage the state of the email and password input fields
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  //useEffect hook to handle side effects such as displaying error messages or navigating to other pages upon successful login.
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'  style={{fontFamily: "Georgia, serif" }}>
        <h1>
        <IoMdLogIn /> Login
        </h1>
      </section>

      <section className='form' >
        <form onSubmit={onSubmit} >
          <div className='form-group' >
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block' style={{fontFamily: "Georgia, serif" }} >
              Submit
            </button>
            <div className='form-group'>
          <br/>
        Not a User? Register&nbsp;
        <Link to='/register'>
                 Here
              </Link>
          </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login