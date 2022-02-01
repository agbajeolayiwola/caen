import React, {useState} from 'react'
import './style.css'
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";


const Results = ({newdata}) => {
    let displayUsers
//pagin nate calculations
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 9
    const pagesVisited = pageNumber * usersPerPage
    
    const pageCount = Math.ceil(newdata.length/usersPerPage) 

    const changePage= ({selected})=>{
        setPageNumber(selected);
    }
    console.log(newdata)
    
    return(
        <div>
        <div>
        {
            displayUsers = newdata.slice(pageNumber, pagesVisited+usersPerPage).map(newdata=>(
            <div key={newdata.id} className='results_list'>
        <div className='resultOverall'>
            <div className='img-name'>
            <img className='results_img' src={newdata.avatar_url} alt='notion.so'/>
            <p className='loginP' key={newdata.id}>{newdata.login}</p>
            </div>

            <div className='user'>
                <a href={`${newdata.html_url}`}
                 target="_blank"
                 rel="noreferrer noopener"> <p className='typeP'>
                     Visit Github
                     </p></a>
            
            </div>
        </div>
            </div>

                        
            ))}
        
        </div>
        {newdata >= 0 ?
        null:        
        <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButton'}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginDisabed'}
        activeClassName={'paginationAct'}
        />

        }
    </div>
    )
}

export default Results
