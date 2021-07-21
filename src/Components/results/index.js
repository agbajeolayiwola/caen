import React, {useState} from 'react'
import './style.css'
import ReactPaginate from 'react-paginate';


const Results = ({newdata}) => {
    let displayUsers

    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 9
    const pagesVisited = pageNumber * usersPerPage
    
    const pageCount = Math.ceil(newdata.length/usersPerPage) 

    const changePage= ({selected})=>{
        setPageNumber(selected);
    }
    

   
    if(newdata > 0){
        return <h2>Loading</h2>
    }
    
    return(
        <div>
        <div>
            <div className='result_header_div'>
                <ul className='result_Header_ul'>
                    <li>Avatar</li>
                    <li>Name</li>
                    <li>Status</li>
                </ul>
            </div>
        {
            displayUsers = newdata.slice(pageNumber, pagesVisited+usersPerPage).map(newdata=>(
            <ul key={newdata.id} className='results_list'>
            <li><img className='results_img' src={newdata.avatar_url} alt='notion.so'/></li>
            <li><p className='loginP' key={newdata.id}>{newdata.login}</p></li>
            <li><p className='typeP'>{newdata.type}</p></li>
            </ul>
                        
            ))}
        
        </div>
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
    </div>
    )
}

export default Results
