import React,{useState, useEffect} from 'react'
import './style.css'
import Results from '../results';
import { motion } from "framer-motion"



const variants = {
  open: {paddingTop: '20px'},
}

const SearchComp = (props) => {
  //screan size
    const [size, setSize] = useState()
    //set login value for search field
    const [loginvalue, setLoginValue] = useState([])
    //set data recieved from api call
    const [newdata, setNewData] = useState([])

    const [isOpen, setIsOpen] = useState(false)

//api fuction
    const loadAsyncData = async () => {      
        try {
          //get api data
          const response = await fetch(`https://api.github.com/search/users?q=${loginvalue} in:login`)
          const data = await response.json();
          setNewData(data.items)
        } catch(e) {
        }
        
      }
      //serch button function  called when button is clicked 
      const getResult =(e)=>{
        e.preventDefault();
        loadAsyncData();
        
       setIsOpen(isOpen => !isOpen)
        //console.log('async data',newdata)
      }
    //useEffect for screen size not really needed for the challenge
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
      <div>
        <motion.div 
        className='search'
        animate={isOpen ? "open" : "closed"}
      variants={variants}
      >
            <form className='search_Form'>
                <input 
                data-testid='inputText'
                autoFocus
                type='text' 
                className='form-control'
                placeholder='Search'
                //set login field value
                onChange={(e) => setLoginValue(e.target.value)}
                /><br></br>
                <input 
                data-testid='inputBtn'
                type='submit' 
                className='search_Btn' 
                value='Search' 
                //get result onClick
                onClick={getResult}
                />
            </form>
    {/*pass in new data props to result componenet*/}
            <Results newdata={newdata}/>
        </motion.div>
        </div>
    )
}

export default SearchComp
