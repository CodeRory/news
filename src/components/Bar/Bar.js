import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import '../Bar/Bar.css';



export default function SearchAppBar() {  

  return (
    <div>
      <AppBar position="flex" className="SectionBar" >
        <Toolbar className="bar">
          <div className='sections'>
            <ul className='' >
                <a href="/#" id='sec'>Section1</a>               
                <a href="/#" id='sec'>Section2</a>
                <a href="/#" id='sec'>Section3</a>
                <a href="/#" id='sec'>Section4</a>
            </ul>
          </div>      
        </Toolbar>
      </AppBar>
    </div>
  );
}
