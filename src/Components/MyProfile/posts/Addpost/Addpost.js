import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import './Addpost.css'
import { Modal } from '@material-ui/core';
import SimpleModal from '../../../UI/modal/Modal';
import PostUploader from '../postUploader/PostUploader';


 
const Addpost = (props) => {

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  const body = <PostUploader />

  return (
    <div className='Posts'>
          <div
        className='addPost'>
          <p
          className='para'
          onClick={handleOpen}>Add new post</p>
         <SimpleModal
          handleClose={handleClose}
          open={open}
          body={body} /> 
          
      </div>
    </div>
  );
}

export default Addpost;