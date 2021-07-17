import React,{useState, useEffect} from 'react'
import './style.css'

const SearchComp = () => {
    const [size, setSize] = useState()
    const [loginvalue, setLoginValue] = useState()

    const loadAsyncData = async () => {      
        try {
          const response = await fetch(`https://api.github.com/search/users?q=${loginvalue} in:login`)
          const data = await response.json();
          console.log('data from SearchComponent', data)
          
        } catch(e) {
        }
        
      }
    
      const getResult =(e)=>{
        e.preventDefault();
        loadAsyncData();
        console.log('clicked')
        console.log(loginvalue)
      }
    
    useEffect(() => {
      const handleResize=()=>{
        setSize([window.innerHeight, window.innerWidth])
      return ()=>{
        window.removeEventListener('resize', handleResize)
      }
      }
      window.addEventListener('resize', handleResize)
    }, []);
    
    return (
        <div className='search'>
            <form className='searchForm'>
                <input 
                type='text' 
                className='search_Field' 
                placeholder='Search'
                onChange={(e) => setLoginValue(e.target.value)}
                /><br></br>
                <input 
                type='submit' 
                className='serch_Btn' 
                value='Seach' 
                onClick={getResult}

                />
            </form>
        </div>
    )
}

export default SearchComp
