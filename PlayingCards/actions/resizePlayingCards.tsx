import { AppThunk } from "../../../Features/featuresStore";
import { 
  setSharedKey,
} from "../../../Features";
import {playingCardsAS} from "../../../Features/PlayingCards";

export const resizePlayingCards = (): AppThunk => async (dispatch: any) => {
  try {
    dispatch(playingCardsAS("RESIZE"));
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "101",
      message: error.toString()
    }}))
  }
};
