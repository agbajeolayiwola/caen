import React,{useState, useEffect} from 'react'
import './style.css'
import Results from '../results';

const SearchComp = (props) => {
    const [size, setSize] = useState()
    const [loginvalue, setLoginValue] = useState([])
    const [newdata, setNewData] = useState([])

    const loadAsyncData = async () => {      
        try {
          const response = await fetch(`https://api.github.com/search/users?q=${loginvalue} in:login`)
          const data = await response.json();
          setNewData(data.items)
        
          
        } catch(e) {
        }
        
      }
      const getResult =(e)=>{
        e.preventDefault();
        loadAsyncData();
        console.log('async data',newdata)
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

    console.log('size',size)
    return (
        <div className='search'>
            <form className='search_Form'>
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
            <Results newdata={newdata}/>
        </div>
    )
}

export default SearchComp
