import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/newtierlistform.css';

const NewTierlistForm = props => {
  return (
    <form className='tierlist-form' noValidate autoComplete='off'>
      <TextField
        className='textfield'
        id='outlined-name'
        label='name'
        name='name'
        value={props.name}
        onChange={() => props.handleChange}
        margin='normal'
        variant='outlined'
      />
      <TextField
        id='outlined-title'
        label='title'
        name='title'
        value={props.name}
        onChange={() => props.handleChange()}
        margin='normal'
        variant='outlined'
      />
      <Button
        type='submit'
        variant='outlined'
        color='primary'
        onClick={() => props.onHandleSubmit()}
      >
        save
      </Button>
    </form>
  );
};

export default NewTierlistForm;
