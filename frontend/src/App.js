import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Review from './pages/Review'
import ViewReview from './pages/ViewReview'

//React component that defines the routes and components for the application. 

//The Header component is rendered on top of all routes and contains links to navigate to the different pages of the application.


function App() {
  return (
    <>
      <Router >
        <div>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<div className='container'><Dashboard /></div>} />

            <Route path='/login' element={<div className='container1'><Login /></div>} />

            <Route path='/register' element={<div className='container1'><Register /></div>} />

            <Route path="/review/:id" element={<Review />}/>

            <Route path="/reviews/view/:id" element={<ViewReview />}/>

          </Routes>
        </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App