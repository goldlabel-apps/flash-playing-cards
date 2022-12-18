import React from "react";
import { 
  Box,
  Button,
} from "@mui/material";
import {
  useFeatureDispatch,
  Icon,
} from "../../../Features";
import {
  SelectSuit,
  SelectRank,
  Fontify,
  flipCard,
} from "../../../Features/PlayingCards";

export function Actions() {
  const dispatch = useFeatureDispatch();
  
  return (
    <Box sx={{p:1}}>
      <SelectSuit />
      <Box sx={{mb:3}} />
      <SelectRank />
      <Box sx={{mb:3}} />
      <Button
        fullWidth
        variant="outlined"
        onClick={(e:React.MouseEvent) => {
          e.preventDefault();
          dispatch(flipCard());
        }}>
          <Box sx={{mr:1, mt:0.35}}>
            <Fontify type="heading" fontSize="1.4rem">
              Flip
            </Fontify>
          </Box>
          <Icon icon="refresh" />
      </Button>
    </Box>
  );
};
