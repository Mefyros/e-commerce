import React from 'react';
import Button from '@material-ui/core/Button';
import CategoriesComponent from './CategoriesComponent';
import Popover from '@material-ui/core/Popover';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
      setAnchorEl(event.currentTarget);
    }

    function handleClose() {
      setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} size='small' style={{borderRadius: '20px', backgroundColor: '#8fd6a0', }} onClick={handleClick}>
        All our product &#9660;
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <CategoriesComponent allData={props.allData}/>
      </Popover>
    </div>
  );
}
