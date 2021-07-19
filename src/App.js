import './App.css';
import React,{useState, useEffect} from 'react'
import { SeachComp, Results } from './Components';

function App() {
  const [dataperPage, setDataPerPage] = useState(9)
  const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className="App">
      <SeachComp/>

    </div>
  );
}

export default App;
