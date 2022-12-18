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

export default function SelectRank() {
  const dipatch = useFeatureDispatch();
  const playingCards = useFeatureSelect(selectPlayingCards);
  const {rank} = playingCards;

  const handleChange = (event: SelectChangeEvent) => {
    dipatch(changeCard({key: "newRank", value: event.target.value as string }));
  };

  return (
    <Box sx={{}}>
      <FormControl fullWidth>
        <InputLabel id="rank-select-label">Select rank</InputLabel>
        <Select
          variant="filled"
          labelId="rank-select-label"
          id="rank-select"
          value={rank}
          label="Rank"
          onChange={handleChange}
        >
          <MenuItem value={"A"}>Ace</MenuItem>
          <MenuItem value={"K"}>King</MenuItem>
          <MenuItem value={"Q"}>Queen</MenuItem>
          <MenuItem value={"J"}>Jack</MenuItem>
          <MenuItem value={"10"}>Ten</MenuItem>
          <MenuItem value={"9"}>Nine</MenuItem>
          <MenuItem value={"8"}>Eight</MenuItem>
          <MenuItem value={"7"}>Seven</MenuItem>
          <MenuItem value={"6"}>Six</MenuItem>
          <MenuItem value={"5"}>Five</MenuItem>
          <MenuItem value={"4"}>Four</MenuItem>
          <MenuItem value={"3"}>Three</MenuItem>
          <MenuItem value={"2"}>Two</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
