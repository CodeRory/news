import React from 'react';
import AlertDialog from '../Bar/BarDialog';




import '../Bar/Bar.css';

export default function SearchAppBar() {  
  return (
    <div className='container'>
      <ul className='allSections'>
        <li><a href="/#">Section 1</a><AlertDialog /></li>
        <li><a href="/#">Section 2</a></li>
        <li><a href="/#">Section 3</a></li>
        <li><a href="/#">Section 4</a></li>
      </ul>  
    </div>    
  );
}
