import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PaperForm from '../components/PaperForm'
import PaperItem from '../components/PaperItem'
import Spinner from '../components/Spinner'
import { getPapers, reset } from '../features/papers/paperSlice'

//Dashboard page which is used to display all assigned papers
//It renders a header, a table of papers with their details, 
//and a message if there are no assigned papers.

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { papers, isLoading, isError, message } = useSelector(
    (state) => state.papers
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getPapers())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading' >
        <h2 style={{fontFamily: "Georgia, serif" }}>Papers Dashboard</h2>
      </section>


      <section className='content'>
      <p style={{ fontSize: "25px",textAlign: "left", fontFamily: "Georgia, serif",fontWeight: "bold"}}>Assigned Papers :</p>

        {papers.length > 0 ? (
          <div >
           
<table className="table  table-striped table-bordered table-hover table-sm" style={{textAlign: "left"}} >
    <thead>
        <tr class="danger">
            <th style={{paddingLeft: "10px",width: "10%"}}>Paper Title</th>
            <th style={{paddingLeft: "10px" ,width: "10%"}}>Authors</th>
            <th style={{paddingLeft: "10px" ,width: "10%"}}>Keywords</th>
            <th style={{paddingLeft: "10px" ,width: "10%"}}>Abstract</th>
            <th style={{paddingLeft: "10px" ,width: "10%"}}>PDF Attachment</th>

            <th style={{paddingLeft: "10px" ,width: "10%" , align: "left"}}>Submitted by Author</th>
            <th style={{paddingLeft: "10px" ,width: "10%"}}>Action</th>
        </tr>
    </thead>
    <tbody>
    {Array.isArray(papers) &&
papers.map((paper) => <PaperItem key={paper._id} paper={paper} />)}

</tbody>
   
</table>
          </div>
        ) : (
          <h3>You have not assigned any papers</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard