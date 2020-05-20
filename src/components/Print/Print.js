import React, { Component } from 'react'
import LocalPrintshopIcon from '@material-ui/icons/LocalPrintshop';

class PrintThisComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => window.print()}><LocalPrintshopIcon style={{height: 2100, color: 'primary', cursor: 'pointer'}} /></button>        
      </div>
    )
  }
}

export default PrintThisComponent;



