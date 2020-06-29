import React from 'react';
import Modal from '@material-ui/core/Modal';
import './Modal.css'



 const SimpleModal = (props) =>  {

 

  return (
    <div className='Modal'>
      <Modal
        style={{backgroundColor: 'rgba(0, 0, 0, 0.11)'}}
        open={props.open}
        onClose={props.handleClose}
      >
      <div
        className='addPost'>
          <p 
          className='para'
          onClick={handleOpen}>+</p>
         <SimpleModal
          handleClose={handleClose}
          open={open}
          body={body} /> 
      </div>
       {props.body}
      </Modal>
    </div>
  );
}

export default SimpleModal