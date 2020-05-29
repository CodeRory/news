import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Drawer/Drawer';
import ImgMediaCard2 from './components/Cards/Cards2';
import SearchAppBar from './components/Bar/Bar';
import ImgMediaCard1 from './components/Cards/Card1';
import RecipeReviewCard from '../src/components/Cards/Cards3';
import RecipeReviewCard3 from '../src/components/Cards/Cards4';
import SearchAppBar2 from '../src/components/Bar/Bar2';
import Uploader from './components/Uploader/Uploader' ;
import CommentBox from './components/Comments/Comments';

function App(){
  return(
    <div className="App">
      <div className="Drawer">
        <PersistentDrawerLeft/>
      </div>      
     
      <div>
        <SearchAppBar />
      </div>
      
      <div id="firstContainer">
        <div id="left">
          <ImgMediaCard1 />  
        </div> 
        <div id="right">   
          <RecipeReviewCard />    
        </div>    
      </div>

      <div className="secondContainer">
        <ImgMediaCard2/>
      </div>

      <div>      
        <RecipeReviewCard3/>
      </div>

      <div id="interact">
        <div id="int1">
          <Uploader />
        </div> 
        <div id="int2"> 
          <CommentBox /> 
        </div>
      </div>
     
      <div>
        <SearchAppBar2/>
      </div>
      
      
    </div>  
  )
}


export default App;