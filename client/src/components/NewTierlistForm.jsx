import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/newtierlistform.css';

const NewTierlistForm = props => {
  return (
    <form className='tierlist-form' noValidate autoComplete='off'>
      <TextField
        id='outlined-title'
        label='title'
        name='title'
        value={props.title}
        onChange={e => props.handleInputChange(e)}
        margin='normal'
        variant='outlined'
      />
      <TextField
        className='textfield'
        id='outlined-name'
        label='your name'
        name='name'
        value={props.name}
        onChange={e => props.handleInputChange(e)}
        margin='normal'
        variant='outlined'
      />
      <Button
        type='submit'
        variant='outlined'
        color='primary'
        onClick={e => props.handleFormSubmit(e)}
      >
        save
      </Button>
    </form>
  );
};

export default NewTierlistForm;
