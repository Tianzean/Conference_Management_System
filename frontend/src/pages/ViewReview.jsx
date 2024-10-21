import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsbyId } from '../features/reviews/reviewSlice';
import Spinner from '../components/Spinner'

//React component ViewReview imports useEffect, useParams, useNavigate, useDispatch, and useSelector 
//from the react-router-dom and react-redux libraries, as well as a Spinner component from a local file. 
//It also imports a function called getReviewsbyId from a reviewSlice file.


const ViewReview = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const dispatch = useDispatch();
  const { reviews, loading, error } = useSelector(state => state.review);

  useEffect(() => {
    dispatch(getReviewsbyId(id));
  }, [dispatch]);

  const handleBack = () => {
    navigate(`/`);
  };


  if (loading) {
    return <Spinner />
  }
  return (
    <>
    <section className='heading' >
        
        <section className='heading' >
        <h2 style={{fontFamily: "Georgia, serif" , textAlign: "center"}}>Reviews Dashboard</h2>
      </section>      </section>
      {loading && <div>Loading reviews...</div>}
      {error && <div>Error fetching reviews: {error}</div>}
      {!loading && !error && reviews.length === 0 && <div>No reviews found</div>}
      {!loading && !error && reviews.length > 0 &&
        <table className="table  table-striped table-bordered table-hover table-sm" style={{textAlign: "left"}}>
          <thead>
            <tr class="danger">
              <th  style={{paddingLeft: "10px",width: "10%"}}>Reviewer</th>
              <th  style={{paddingLeft: "10px",width: "10%"}}>Overall Score</th>
              <th  style={{paddingLeft: "10px",width: "10%"}}>Review Details</th>
              <th  style={{paddingLeft: "10px",width: "10%"}}>Private Comments</th>
             
            </tr>
          </thead>
          <tbody>
            {reviews.map(review => (
              <tr class="info" key={review._id}>
                <td>{review.username}</td>
                <td>{review.overallScore}</td>
                <td>{review.reviewDetails}</td>
                <td>{review.privateComments}</td>
                
              </tr>
            ))}
            
          </tbody>
         

           
        </table>



      }
       <div style={{ display: "flex", justifyContent: "center" }}>

{ <button className='button1' type="button" onClick={handleBack}>Go Back</button>}
</div>
    </>
  );
};

export default ViewReview;
