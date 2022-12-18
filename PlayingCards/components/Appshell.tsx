import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import {
  useFeatureSelect,
} from "../../../Features/";
import {
  Actions,
  Fontify,
  selectPlayingCards,
} from "../../../Features/PlayingCards";

const drawerWidth = 240;

export default function Appshell(props:any) {
  const {children} = props;
  const playingCards = useFeatureSelect(selectPlayingCards);
  const {windowTitle} = playingCards;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Fontify type="heading" fontSize="1.5rem">
            {windowTitle}
          </Fontify>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Actions />
       
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default' }}
      >
        <Toolbar />
        
        {children}
    
      </Box>
    </Box>
  );
}
