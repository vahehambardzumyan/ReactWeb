import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import SimpleModal from '../../UI/modal/Modal';
import './Posts.css'
import PostUploader from './postUploader/PostUploader';


 
const Posts = (props) => {

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  const body = <PostUploader />

  const posts = props.data.map(tile => (
      <GridListTile 
      className='PostsImgs'
      key={tile.img}>
        <img className='PostsImg'
        src={tile.img} 
        alt={tile.title} />
        <GridListTileBar 
          className="text"
          title={tile.title}
        />
      </GridListTile>
    )
  )

  return (
    <div className='Posts'>
         
      <GridList  className='gridList'>
        {posts}
      </GridList>
    </div>
  );
}

export default Posts