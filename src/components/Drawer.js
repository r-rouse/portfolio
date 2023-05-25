import React, { useState } from 'react';
import Drawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import Button from '../assets/Chevron';

const MyDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer}>Toggle Drawer</Button>
      <Drawer open={open} onClose={toggleDrawer}>
        <div>
          <h2>Hi there!</h2>
          <p>Thanks for dropping by and looking at my portfolio</p>
        </div>
      </Drawer>
    </div>
  );
};

export default MyDrawer;
