import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DropdownMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'dropdown-menu' : undefined}
          aria-haspopup='true'
          onClick={this.handleClick}
        >
          <FontAwesomeIcon
            style={{ color: 'white', fontSize: 20 }}
            icon='bars'
          />
        </Button>
        <Menu
          id='dropdown-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link to='/top'>High Rated</Link>{' '}
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to='/new'>Most Recent</Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link to='/random'>Random</Link>
          </MenuItem>
          {/* <MenuItem onClick={this.handleClose}>
            <Link to='/average'>Average</Link>
          </MenuItem> */}
          <hr />
          <MenuItem onClick={this.handleClose}>
            <Link to='/create'>Create Tierlist</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default DropdownMenu;
