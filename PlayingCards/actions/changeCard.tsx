import { AppThunk } from "../../../Features/featuresStore";
import {KeyValue} from "../playingCards-types";
import { 
  setSharedKey,
} from "../../../Features";
import { 
  flipCard,
  setPlayingCardsKey,
} from "../../../Features/PlayingCards";

export const changeCard = (newValues:KeyValue): AppThunk => async (dispatch: any) => {
  try {
    const {key, value} = newValues;
    dispatch(setPlayingCardsKey({key, value}));
    dispatch(flipCard());
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "101",
      message: error.toString()
    }}))
  }
};

