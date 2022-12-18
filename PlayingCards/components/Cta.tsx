import React from "react";
import {
  styled,
  Avatar,
  Box,
  AppBar,
  Toolbar,
  Fab,
} from "@mui/material";
import {
  useFeatureDispatch,
} from "../../../Features";
import {
  onCtaClick,
} from "../../../Features/PlayingCards";

const StyledFab = styled(Fab)({
  boxShadow: "none",
  background: "none",
  position: 'absolute',
  zIndex: 1,
  top: -4,
  right: 8,
  margin: '0 auto',
});

export function Cta() {
  const dispatch = useFeatureDispatch();
  return (
    <Box sx={{m:2}}>
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, background: "none", boxShadow:"none" }}>
        <Toolbar>
          <StyledFab
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              dispatch(onCtaClick());
            }}
            color="inherit" 
            aria-label="add">
            <Avatar src="/svg/DiamondIcon.svg" />  
          </StyledFab>
        </Toolbar>
      </AppBar>
    </Box>    
  );
};


/*
<span style={{marginLeft: 4, marginRight: 4,}}>
  Home
</span>
*/
