import React from 'react';
import './quizzapp.png'

function MyWork(){
  return(
    
<div>
    <h2 className="mywork" id="my-work">My Work</h2>
  
    <h3 className="quizzapp">Quizz App</h3>
    <img className="Quizz-App-Image" src={require('./quizzapp.png')} alt="Quizz App "></img> <br></br>
    <a href=""><button>Check Repo</button></a>
    </div>

   
  )
}


export default MyWork;