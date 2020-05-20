import React, { useState } from 'react';
import '../Uploader/Uploader.css';

import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));




function Uploader() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  const classes = useStyles();

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'newsWeb')
    setLoading(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dqc2hmbyd/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div className="uploader">
      <h1>You also can contribute! Send your pic</h1>
      <h4>Notice: this uploader is currently working. Your picture will be uploaded onto the cloud.</h4>
      <div className="inputcss">
        <input
          accept="image/*"
          className={classes.input}
          type="file"
          name="file"          
          placeholder="Upload an image"
          onChange={uploadImage}
          id="icon-button-file"
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        
      </div>
      
      <div className="loadingcss">
        {loading ? 
          (<h3>Loading...</h3>) 
          : 
          (<img src={image} alt="" style={{ width: '40%'}}/>)
        }
      </div>
    </div>
  )
}

export default Uploader;