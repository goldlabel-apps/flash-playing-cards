import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  useFeatureDispatch,
  useFeatureSelect,
} from "../../../Features";
import {
  changeCard,
  selectPlayingCards,
} from "../../../Features/PlayingCards";

export default function SelectSuit() {
  const dipatch = useFeatureDispatch();
  const playingCards = useFeatureSelect(selectPlayingCards);
  const {suit} = playingCards;
  const handleChange = (event: SelectChangeEvent) => {
    dipatch(changeCard({key: "newSuit", value: event.target.value as string }));
  };
  return (
    <Box sx={{}}>
      <FormControl fullWidth>
        <InputLabel 
          id="suit-select-label"
        >Select Suit</InputLabel>
        <Select
          variant="filled"
          labelId="suit-select-label"
          id="suit-select"
          value={suit}
          label="Suit"
          onChange={handleChange}>
          <MenuItem value={"D"}>Diamonds</MenuItem>
          <MenuItem value={"C"}>Clubs</MenuItem>
          <MenuItem value={"H"}>Hearts</MenuItem>
          <MenuItem value={"S"}>Spades</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
