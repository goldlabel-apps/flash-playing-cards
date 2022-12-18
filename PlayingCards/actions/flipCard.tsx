import { AppThunk, featuresStore } from "../../../Features/featuresStore";
import { 
  setSharedKey,
  animateTo,
} from "../../../Features";
import { 
  setPlayingCardsKey,
} from "../../../Features/PlayingCards";

const stageClip = "playingCardsStage";
let adjustedScale = 1;

export const flipCard = (): AppThunk => async (dispatch: any) => {
  try {
    console.log("flipping Card")
    const {side, flipping, newSuit, newRank} = featuresStore.getState().playingCards;
    if (!flipping){
      dispatch(setPlayingCardsKey({key: "flipping", value: true}));
      animateTo("cardClip", stageClip, "centered", {
          rotationY: -90,
          duration: 0.25,
          scaleX: adjustedScale*1.6,
          scaleY: adjustedScale*1.6,
      }, () => {
          let newFace = "back";
          if(side === "back") newFace = "front";
          dispatch(setPlayingCardsKey({key: "side", value: newFace}));
          let flipFront = false;
          if (newSuit || newRank){
            if (newSuit){
              flipFront = true;
              dispatch(setPlayingCardsKey({key: "suit", value: newSuit}));
              dispatch(setPlayingCardsKey({key: "newSuit", value: null}));
            }
            if (newRank){
              flipFront = true;
              dispatch(setPlayingCardsKey({key: "rank", value: newRank}));
              dispatch(setPlayingCardsKey({key: "newRank", value: null}));
            }
          }
          animateTo("cardClip", stageClip, "centered", {
              rotationY: 0,
              scaleX: adjustedScale*1.7,
              scaleY: adjustedScale*1.7,
              opacity: 1,
          }, () => {
            dispatch(setPlayingCardsKey({key: "flipping", value: false}));
            if(flipFront && newFace === "back"){
              setTimeout(() => {
                console.log("flipCard.");
                flipCard();
              }, 500);
            }
          });
      });
    }
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "101",
      message: error.toString()
    }}))
  }
};
