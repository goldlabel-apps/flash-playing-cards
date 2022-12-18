import React from "react";
import {
  Box,
  ButtonBase,
} from "@mui/material";
import {
  Icon,
} from "../../../Features";
import {
  Fontify,
} from "../../../Features/PlayingCards";

export function Logo() {
  return (
    <ButtonBase 
      sx={{
        display: "block",
        width: "100%",
      }}>
        <Box sx={{display:"flex"}}>
          <Box sx={{flexGrow:1}} />

          <Box sx={{ml:1}}> 
            <Fontify fontSize="1.60rem">
              Flash 
            </Fontify>
          </Box>

          <Box sx={{ml:1, mt:0.5}}>
            <Icon icon="rocket" />
          </Box>
          
          <Box sx={{ml:1}}> 
            <Fontify fontSize="1.60rem">
              Playing Cards
            </Fontify>
          </Box>

          <Box sx={{flexGrow:1}} />
        </Box>
    </ButtonBase>
  );
};
