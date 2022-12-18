import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../featuresStore";
import {
  PCSlice,
  KeyValue,
} from "./playingCards-types";

const initialState: PCSlice = { 
  initted: false,
  windowTitle: "React Playing Cards",
  side: "front",
  rank: "A",
  suit: "S",
  newSuit: null,
  newRank: null,
  flipping: false,
};

export const playingCardsSlice = createSlice({
  name: 'playingCards',
  initialState,
  reducers: {
    setPlayingCardsKey: (state, action: PayloadAction<KeyValue>) => {
      const { key, value } = action.payload;
      // @ts-ignore
      state[key] = value;
    },
  },
})

export const selectPlayingCards = (state: RootState) => state.playingCards;
export const { setPlayingCardsKey } = playingCardsSlice.actions; 
export default playingCardsSlice.reducer;
