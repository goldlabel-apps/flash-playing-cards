import {featuresStore, AppThunk} from '../../Features/featuresStore';
import {
    animateTo,
    setPosition,
    setSharedKey,
} from "../../Features";
import {
    setPlayingCardsKey,
} from "../../Features/PlayingCards";

const stageClip = "playingCardsStage";
let adjustedScale = 1;

const resize = (dispatch: any) => {
    setTimeout(() => {
        // animateTo("pCLogoClip", stageClip, "bottomright", {
        //     opacity: 1,
        //     scaleX: adjustedScale,
        //     scaleY: adjustedScale,
        // }, () => {});
        animateTo("cardClip", stageClip, "centered", {
            opacity: 1,
            scaleX: adjustedScale*1.7,
            scaleY: adjustedScale*1.7,
        }, () => {});
    }, 333);
    return true;
};

const setup = (dispatch: any) => {  
    dispatch(setPlayingCardsKey({key: "initted", value: true}));
    setTimeout(() => { 
        // setPosition("pCLogoClip", stageClip, "bottomright", {
        //     scale: adjustedScale,
        // });
        setPosition("cardClip", stageClip, "centered", {
            scale: adjustedScale,
        });
        resize(dispatch);
    }, 444);
    return true;
};

export const playingCardsAS = (action: string): AppThunk => async (dispatch: any) => {
    try {
        if (action === "SETUP") setup(dispatch);
        if (action === "RESIZE") resize(dispatch);
    } catch (error: any) {
        featuresStore.dispatch(setSharedKey({ key: "notification", value: {
          code: "Error 1379",
          severity: "warning",
          message: error.toString(),  
        } 
      }));
    };
};
